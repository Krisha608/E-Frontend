import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getUserCart,
  deleteCartProduct,
  updateCartProduct,
} from "../features/user/userSlice";
import { useSelector } from "react-redux";
// const Cart = () => {
//   return (
//     <>
//       <Meta title={"Cart"} />
//       <BreadCrumb title="Cart" />
//       <Container class1="cart-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           <div className="col-12">
//             <div className="cart-header py-3 d-flex justify-content-between align-items-center">
//               <h4 className="cart-col-1">Product</h4>
//               <h4 className="cart-col-2">Price</h4>
//               <h4 className="cart-col-3">Quantity</h4>
//               <h4 className="cart-col-4">Total</h4>
//             </div>
//             <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
//               <div className="cart-col-1 gap-15 d-flex align-items-center">
//                 <div className="w-25">
//                   <img src={watch} className="img-fluid" alt="product image" />
//                 </div>
//                 <div className="w-75">
//                   <p>GDffdhg</p>
//                   <p>Size: hgf</p>
//                   <p>Color: gfd</p>
//                 </div>
//               </div>
//               <div className="cart-col-2">
//                 <h5 className="price">$ 100</h5>
//               </div>
//               <div className="cart-col-3 d-flex align-items-center gap-15">
//                 <div>
//                   <input
//                     className="form-control"
//                     type="number"
//                     name=""
//                     min={1}
//                     max={10}
//                     id=""
//                   />
//                 </div>
//                 <div>
//                   <AiFillDelete className="text-danger " />
//                 </div>
//               </div>
//               <div className="cart-col-4">
//                 <h5 className="price">$ 100</h5>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 py-2 mt-4">
//             <div className="d-flex justify-content-between align-items-baseline">
//               <Link to="/product" className="button">
//                 Continue To Shopping
//               </Link>
//               <div className="d-flex flex-column align-items-end">
//                 <h4>SubTotal: $ 1000</h4>
//                 <p>Taxes and shipping calculated at checkout</p>
//                 <Link to="/checkout" className="button">
//                   Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

const Cart = () => {
  const dispatch = useDispatch();
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log(totalAmount);
  console.log(productUpdateDetail);
  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  //console.log(userCartState);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 600);
  };

  const updateACartProduct = (productUpdateDetail) => {};
  
  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 300);
    }
  }, [productUpdateDetail, dispatch]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < userCartState?.length; i++) {
      sum += userCartState[i]?.price * userCartState[i]?.quantity;
    }
    setTotalAmount(sum);
  }, [userCartState]);

  return (
    <>
      <Meta title={"Shopping Cart"} />
      <BreadCrumb title="Shopping Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-3 ms-3"> Shopping Cart</h4>
            <div className="cart-inner-wrapper pt-4">
              <div className="cart-header d-flex justify-content-between align-items-center ">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {userCartState &&
                userCartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cart-data d-flex justify-content-between align-items-center py-3 mb-2"
                    >
                      <div className="cart-col-1 d-flex align-items-center gap-15">
                        <div className="w-25">
                          <img
                            className="img-fluid"
                            src={watch}
                            alt="product"
                          />
                        </div>
                        <div className="w-75">
                          <p>{item?.productId?.title}</p>
                          <p className="d-flex gap-3">
                            Color:
                            <ul className="colors ps-0">
                              <li
                                style={{ backgroundColor: item?.color?.title }}
                              ></li>
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <h5 className="price">$ {item?.price.toFixed(2)}</h5>
                      </div>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div>
                          <input
                            type="number"
                            name=""
                            id=""
                            min={1}
                            max={10}
                            className="form-control"
                            value={
                              productUpdateDetail?.quantity
                                ? productUpdateDetail?.quantity
                                : item?.quantity
                            }
                            onChange={(e) => {
                              setProductUpdateDetail({
                                cartItemId: item?._id,
                                quantity: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <RiDeleteBin5Line
                            onClick={() => deleteACartProduct(item?._id)}
                            className="fs-4 text-danger"
                          />
                        </div>
                      </div>
                      <div className="cart-col-4">
                        <h5 className="price">
                          $ {item?.price * item?.quantity.toFixed(2)}
                        </h5>
                      </div>
                    </div>
                  );
                })}

              <div className="cart-data-bottom col-12 my-3 pe-5">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/product" className="button mt-3">
                    Continue Shopping
                  </Link>
                  <div className="d-flex flex-column align-items-end">
                  {totalAmount > 0 ? (
                      <h4 className="subtotal">
                        Subtotal: $ {totalAmount.toFixed(2)}
                      </h4>
                    ) : (
                      <h4 className="subtotal">Subtotal: $ 0.00</h4>
                    )}
                    <p>Taxes and Shipping are calculated at checkout</p>
                    <Link to="/checkout" className="button mt-0">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Cart;
