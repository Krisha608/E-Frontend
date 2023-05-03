import React from "react";
import { Link, resolvePath } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {config} from "../utils/axiosConfig"
import { createAnOrder } from "../features/user/userSlice";

const checkoutSchema = Yup.object({
  country: Yup.string().required("Country is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  address: Yup.string().required("Address is required"),
  other: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string().required("Zip Code is required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  console.log(cartState);

  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo,setPaymentInfo]=useState({razorpayPaymentId:"",razorpayOrderId:""})
  const [cartProductState,setCartProductState] = useState([])
 console.log(paymentInfo,shippingInfo)
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum += cartState[i]?.price * cartState[i]?.quantity;
    }
    setTotalAmount(sum);
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      country: "",
      firstName: "",
      lastName: "",
      address:"",
      other: "",
      city: "",
      state: "",
      pincode: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setShippingInfo(values); 
      setTimeout(()=>{
        checkOutHandler();
      },300)
      
    },
  });

  //implement payment through stripe
  // const handlePayment = async () => {
  //   const response = await axios.post(
  //     "http://localhost:5000/api/payment/create-checkout-session",
  //     shippingInfo,

  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         token: localStorage.getItem("token"),
  //       },
  //     }
  //   );
  //   console.log(response);
  // };

  const loadScript=(src)=>{
    return new Promise((resolve)=>{
      const script =document.createElement("script")
      script.src=src
      script.onload=()=>{
        resolve(true)
      }
      script.onerror=()=>{
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
useEffect(()=>{
  let items =[]
  for(let index=0;index<cartState?.length;index++){
            items.push({product:cartState[index].productId._id,quantity:cartState[index].quantity,color:cartState[index].color._id,price:cartState[index].price})
  } 
  setCartProductState(items)
},[])
  const checkOutHandler=async()=>{
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if(!res){
      alert("RazorPay SDK Failed to Load")
      return
    }
    const result =await axios.post("http://localhost:5000/api/user/order/checkout",{amount:totalAmount+5})
    if(!result){
      alert("Something Went Wrong")
      return
    }
    const {amount,id:order_id,currency}  = result.data.order
    console.log(amount)
    const options = {
      key: "rzp_test_iV3X4W2GAh7206", 
      amount: amount,
      currency: currency,
      name: "Krisha",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
          const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
          };

          const result = await axios.post("http://localhost:5000/api/user/order/paymentVerification", data);
          setPaymentInfo({
            razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
          })
        
          dispatch(createAnOrder({totalPrice:totalAmount,totalPriceAfterDiscount:totalAmount,orderItems:cartProductState,paymentInfo,shippingInfo}))
      },

      prefill: {
          name: "Krisha",
          email: "Krisha@example.com",
          contact: "9999999999",
      },
      notes: {
          address: "Unnati Corporate Office",
      },
      theme: {
          color: "#61dafb",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  }
  return (
    <>
      <Container class1="checkout-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Dev Corner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-ite total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Krisha Patel (krishap896@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    id=""
                    className="form-control form-select"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                  >
                    <option value="">Select Country</option>
                    <option value="Unated States">Unated States</option>
                    <option value="Unated Kingdom">Unated Kingdom</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="India">India</option>
                  </select>
                  <div className="error mt-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                  />
                  <div className="error mt-1">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                  />
                  <div className="error mt-1">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error mt-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite ,etc"
                    className="form-control"
                    name="other"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                  />
                  <div className="error mt-1">
                    {formik.touched.other && formik.errors.other}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="error mt-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    id=""
                    className="form-control form-select"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                  >
                    <option value="">Select State</option>
                    <option value="MP">Mp</option>
                    <option value="Gujarat">Gujarat</option>
                  </select>
                  <div className="error mt-1">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                    name="pincode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                  />
                  <div className="error mt-1">
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button mt-0 fs-6">
                      Continue to Shipping
                    </Link>
                    <button className="button" type="submit" >Place Order</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="checkout-right-data bg-white border rounded py-3 px-3">
              <h4 className="title border-bottom mt-0 pb-2">Order Summary</h4>
              <div className="border-bottom">
                {cartState &&
                  cartState?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex justify-content-between my-3 "
                      >
                        <div className="w-25 position-relative">
                          <span
                            className="badge bg-warning rounded-circle position-absolute p-2 "
                            style={{ right: "-20px", top: "0" }}
                          >
                            {item?.quantity}
                          </span>
                          <img
                            className="img-fluid border rounded m-2"
                            src={
                              item?.productId?.images[0]?.url
                                ? item?.productId?.images[0]?.url
                                : watch
                            }
                            alt="product"
                          />
                        </div>
                        <div className="ms-3">
                          <h5 className="title"> {item?.productId?.title}</h5>
                          <p className="article">Color: {item?.color.title}</p>
                        </div>
                        <h5 className="mt-0 price">
                          $ {item?.price * item?.quantity}
                        </h5>
                      </div>
                    );
                  })}
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <p>SubTotal:</p>
                <p>$ {totalAmount ? totalAmount : 0}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3 border-bottom">
                <p>Shipping:</p>
                <p>$ 5.00</p>
              </div>

              <div className="d-flex justify-content-between align-items-center my-3">
                <h5>Total:</h5>
                <h5>$ {totalAmount ? totalAmount + 5 : 0}</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
