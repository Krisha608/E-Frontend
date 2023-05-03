import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbHeartPlus } from "react-icons/tb";
import { DiGitCompare } from "react-icons/di";
import { BiCopy } from "react-icons/bi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addRatig, getAProduct } from "../features/products/productSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProductToCart, getUserCart } from "../features/user/userSlice";

// const SingleProduct = () => {
  
//   const props = {
//     width: 594,
//     height: 600,
//     zoomWidth: 600,

//     img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
//   };

//   const [orderedProduct, setorderedProduct] = useState(true);
//   const copyToClipboard = (text) => {
//     console.log("text", text);
//     var textField = document.createElement("textarea");
//     textField.innerText = text;
//     document.body.appendChild(textField);
//     textField.select();
//     document.execCommand("copy");
//     textField.remove();
//   };
//   const closeModal = () => {};
//   return (
//     <>
//       <Meta title={"Product Name"} />
//       <BreadCrumb title="Product Name" />
//       <Container class1="main-product-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-6">
//             <div className="main-product-image">
//               <div>
//                 <ReactImageZoom {...props} />
//               </div>
//             </div>
//             <div className="other-product-images d-flex flex-wrap gap-15">
//               <div>
//                 <img
//                   src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
//                   className="img-fluid"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <img
//                   src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
//                   className="img-fluid"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <img
//                   src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
//                   className="img-fluid"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <img
//                   src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
//                   className="img-fluid"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="main-product-details">
//               <div className="border-bottom">
//                 <h3 className="title">
//                   Kids Headphones Bulk 10 Pack Multi Colored For Students
//                 </h3>
//               </div>
//               <div className="border-bottom py-3">
//                 <p className="price">$ 100</p>
//                 <div className="d-flex align-items-center gap-10">
//                   <ReactStars
//                     count={5}
//                     size={24}
//                     value={4}
//                     edit={false}
//                     activeColor="#ffd700"
//                   />
//                   <p className="mb-0 t-review">( 2 Reviews )</p>
//                 </div>
//                 <a className="review-btn" href="#review">
//                   Write a Review
//                 </a>
//               </div>
//               <div className=" py-3">
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Type :</h3>
//                   <p className="product-data">Watch</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Brand :</h3>
//                   <p className="product-data">Havells</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Category :</h3>
//                   <p className="product-data">Watch</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Tags :</h3>
//                   <p className="product-data">Watch</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Availablity :</h3>
//                   <p className="product-data">In Stock</p>
//                 </div>
//                 <div className="d-flex gap-10 flex-column mt-2 mb-3">
//                   <h3 className="product-heading">Size :</h3>
//                   <div className="d-flex flex-wrap gap-15">
//                     <span className="badge border border-1 bg-white text-dark border-secondary">
//                       S
//                     </span>
//                     <span className="badge border border-1 bg-white text-dark border-secondary">
//                       M
//                     </span>
//                     <span className="badge border border-1 bg-white text-dark border-secondary">
//                       XL
//                     </span>
//                     <span className="badge border border-1 bg-white text-dark border-secondary">
//                       XXL
//                     </span>
//                   </div>
//                 </div>
//                 <div className="d-flex gap-10 flex-column mt-2 mb-3">
//                   <h3 className="product-heading">Color :</h3>
//                   <Color />
//                 </div>
//                 <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
//                   <h3 className="product-heading">Quantity :</h3>
//                   <div className="">
//                     <input
//                       type="number"
//                       name=""
//                       min={1}
//                       max={10}
//                       className="form-control"
//                       style={{ width: "70px" }}
//                       id=""
//                     />
//                   </div>
//                   <div className="d-flex align-items-center gap-30 ms-5">
//                     <button
//                       className="button border-0"
//                       data-bs-toggle="modal"
//                       data-bs-target="#staticBackdrop"
//                       type="button"
//                     >
//                       Add to Cart
//                     </button>
//                     <button className="button signup">Buy It Now</button>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center gap-15">
//                   <div>
//                     <a href="">
//                       <TbGitCompare className="fs-5 me-2" /> Add to Compare
//                     </a>
//                   </div>
//                   <div>
//                     <a href="">
//                       <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
//                     </a>
//                   </div>
//                 </div>
//                 <div className="d-flex gap-10 flex-column  my-3">
//                   <h3 className="product-heading">Shipping & Returns :</h3>
//                   <p className="product-data">
//                     Free shipping and returns available on all orders! <br /> We
//                     ship all US domestic orders within
//                     <b>5-10 business days!</b>
//                   </p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-3">
//                   <h3 className="product-heading">Product Link:</h3>
//                   <a
//                     href="javascript:void(0);"
//                     onClick={() => {
//                       copyToClipboard(
//                         "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
//                       );
//                     }}
//                   >
//                     Copy Product Link
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Container class1="description-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <h4>Description</h4>
//             <div className="bg-white p-3">
//               <p>
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                 Tenetur nisi similique illum aut perferendis voluptas, quisquam
//                 obcaecati qui nobis officia. Voluptatibus in harum deleniti
//                 labore maxime officia esse eos? Repellat?
//               </p>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Container class1="reviews-wrapper home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <h3 id="review">Reviews</h3>
//             <div className="review-inner-wrapper">
//               <div className="review-head d-flex justify-content-between align-items-end">
//                 <div>
//                   <h4 className="mb-2">Customer Reviews</h4>
//                   <div className="d-flex align-items-center gap-10">
//                     <ReactStars
//                       count={5}
//                       size={24}
//                       value={4}
//                       edit={false}
//                       activeColor="#ffd700"
//                     />
//                     <p className="mb-0">Based on 2 Reviews</p>
//                   </div>
//                 </div>
//                 {orderedProduct && (
//                   <div>
//                     <a className="text-dark text-decoration-underline" href="">
//                       Write a Review
//                     </a>
//                   </div>
//                 )}
//               </div>
//               <div className="review-form py-4">
//                 <h4>Write a Review</h4>
//                 <form action="" className="d-flex flex-column gap-15">
//                   <div>
//                     <ReactStars
//                       count={5}
//                       size={24}
//                       value={4}
//                       edit={true}
//                       activeColor="#ffd700"
//                     />
//                   </div>
//                   <div>
//                     <textarea
//                       name=""
//                       id=""
//                       className="w-100 form-control"
//                       cols="30"
//                       rows="4"
//                       placeholder="Comments"
//                     ></textarea>
//                   </div>
//                   <div className="d-flex justify-content-end">
//                     <button className="button border-0">Submit Review</button>
//                   </div>
//                 </form>
//               </div>
//               <div className="reviews mt-4">
//                 <div className="review">
//                   <div className="d-flex gap-10 align-items-center">
//                     <h6 className="mb-0">Navdeep</h6>
//                     <ReactStars
//                       count={5}
//                       size={24}
//                       value={4}
//                       edit={false}
//                       activeColor="#ffd700"
//                     />
//                   </div>
//                   <p className="mt-3">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                     Consectetur fugit ut excepturi quos. Id reprehenderit
//                     voluptatem placeat consequatur suscipit ex. Accusamus dolore
//                     quisquam deserunt voluptate, sit magni perspiciatis quas
//                     iste?
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Container class1="popular-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <h3 className="section-heading">Our Popular Products</h3>
//           </div>
//         </div>
//         <div className="row">
//           <ProductCard />
//         </div>
//       </Container>

//       <div
//         className="modal fade"
//         id="staticBackdrop"
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         tabindex="-1"
//         aria-labelledby="staticBackdropLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered ">
//           <div className="modal-content">
//             <div className="modal-header py-0 border-0">
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body py-0">
//               <div className="d-flex align-items-center">
//                 <div className="flex-grow-1 w-50">
//                   <img src={watch} className="img-fluid" alt="product imgae" />
//                 </div>
//                 <div className="d-flex flex-column flex-grow-1 w-50">
//                   <h6 className="mb-3">Apple Watch</h6>
//                   <p className="mb-1">Quantity: asgfd</p>
//                   <p className="mb-1">Color: asgfd</p>
//                   <p className="mb-1">Size: asgfd</p>
//                 </div>
//               </div>
//             </div>
//             <div className="modal-footer border-0 py-0 justify-content-center gap-30">
//               <button type="button" className="button" data-bs-dismiss="modal">
//                 View My Cart
//               </button>
//               <button type="button" className="button signup">
//                 Checkout
//               </button>
//             </div>
//             <div className="d-flex justify-content-center py-3">
//               <Link
//                 className="text-dark"
//                 to="/product"
//                 onClick={() => {
//                   closeModal();
//                 }}
//               >
//                 Continue To Shopping
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  //console.log(color);
  const [quantity, setQuantity] = useState(1);
  // console.log(quantity);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const location = useLocation();
  const { id: productId } = useParams();
  //console.log(productId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.singleProduct);
  const productsState = useSelector((state) => state?.product?.product);
  //console.log(productState);
  const cartState = useSelector((state) => state?.auth?.cartProducts);

  useEffect(() => {
    dispatch(getAProduct(productId));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 300);
  }, [dispatch, productId]);

  // if product already added to cart
  useEffect(() => {
    for (let i = 0; i < cartState?.length; i++) {
      if (cartState[i]?.productId?._id === productId) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please select a color",{icon: "🚀"});
      return false;
    } else {
      dispatch(
        addProductToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      setAlreadyAdded(true);
      navigate("/cart");
    }
  };

  const [orderedProduct, setOrderedProduct] = useState(true);

  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img:
      productState?.images[0]?.url ||
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const [popularProduct,setPopularProduct]=useState([])
  useEffect(() =>{
    let data =[]
    for (let index = 0; index < productsState.length; index++) {
      const element = productsState[index];
      if(element.tags === 'popular'){
        data.push(element)
      }
      setPopularProduct(data)
    }
  },[productState])
  console.log(popularProduct) 

  const [star,setStar]=useState(null)
  const [comment,setComment] = useState(null)
  const addRatingToProduct = () =>{
    if(star===null){
      toast.error("Please add star Rating")
      return false
    }
    else if(comment === null){
      toast.error("Please add comments")
      return false
    }
    else{
      dispatch(addRatig({star:star,comment:comment,prodId:productId})) 
    }
    return false
  }
  return (
    <>
      <Meta title={productState?.title} />
      <BreadCrumb title={productState?.title} />

      <Container class1="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images?.map((image, index) => {
                return (
                  <div key={index}>
                    <img
                      src={
                        image?.url ||
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      }
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                );
              })}

              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom">
                <p className="price">Price: ${productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars>
                    count={5}
                    size={28}
                    value={3}
                    edit={false}
                    activeColor={"#ffd700"}
                  </ReactStars>
                  <p className="mb-0 text-muted">(2 reviews)</p>
                </div>
                <a className="text-dark text-muted py-2" href="#review">
                  Write a review
                </a>
              </div>
              <div className="border-bottomS">
                <div className="d-flex align-items-center gap-10 my-1">
                  <h4 className="product-heading">Brand:</h4>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-1">
                  <h4 className="product-heading">Category:</h4>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-1">
                  <h4 className="product-heading">Tags:</h4>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-1">
                  <h4 className="product-heading">Availabuility:</h4>
                  <p className="product-data">
                    {productState?.quantity > 0 ? "In Stock" : "Not available"}
                  </p>
                </div>

                {/* <div className="d-flex flex-column gap-10 mt-2 mb-3">
                  <h4 className="product-heading">Size:</h4>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 text-dark bg-white">
                      S
                    </span>
                    <span className="badge border border-1 text-dark bg-white">
                      M
                    </span>
                    <span className="badge border border-1 text-dark bg-white">
                      L
                    </span>
                    <span className="badge border border-1 text-dark bg-white">
                      XL
                    </span>
                  </div>
                </div> */}

                {alreadyAdded === false && (
                  <>
                    <div className="d-flex flex-column gap-10 mt-2">
                      <h4 className="product-heading">Color:</h4>
                      <Color
                        setColor={setColor}
                        colorData={productState?.color}
                      />
                    </div>
                  </>
                )}
                <div className="d-flex align-items-center gap-10 mt-0 mb-3">
                  {alreadyAdded === false && (
                    <>
                      <h4 className="product-heading">Quantity:</h4>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          style={{ width: "75px" }}
                          className="form-control"
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div className={"d-flex align-itens-center gap-10 mt-0 mb-3"}>
                    <button
                      className="button login border-0 mt-4"
                      type="button"
                      onClick={() => {
                        alreadyAdded ? navigate("/cart") : 
                        uploadCart();
                       
                      }}
                    >
                      {alreadyAdded === false ? "Add to cart" : "Go to cart"}
                    </button>
                    {/* <button className="button mt-4 border-0">Buy Now</button> */}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <a href="/">
                      <DiGitCompare className="fs-5" /> Add to compare
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <TbHeartPlus className="fs-5 mx-1" />
                      Add to favourite
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-10 my-3">
                <h4 className="product-heading">Shipping & Returns</h4>
                <p className="product-data">
                  Free shipping and returns available on all orders! <br /> We
                  ship all orders within <b>2-5 business days.</b>
                </p>
              </div>
              <div className="d-flex align-items-center gap-10 my-3">
                <h4 className="product-heading">Copy Product Link:</h4>
                <button
                  href={void 0}
                  onClick={() => copyToClipboard(window.location.href)}
                  className="fs-6 bg-white border-0 px-3 py-2"
                >
                  <BiCopy className="fs-5 me-1" />
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Description */}
      <Container class1="description-wrapper home-wrapper-2 pb-5">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-2">Description</h4>
            <p
              className="bg-white p-3"
              dangerouslySetInnerHTML={{ __html: productState?.description }}
            ></p>
          </div>
        </div>
      </Container>

      {/* Reviews */}
      <Container class1="reviews-wrapper home-wrapper-2 pb-5">
        <div className="row">
          <div className="col-12">
            <h4 id="review" className="mb-2">
              Reviews
            </h4>
            <div className="review-inner-wrapper">
              <h5>customer Review</h5>
              <div
                className="review-head d-flex align-items-end
                justify-content-between  "
              >
                <div>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars>
                      count={5}
                      size={28}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    </ReactStars>
                    <p className="py-3 mb-0">Based on 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a
                      className=" text-dark text-decoration-underline py-3"
                      href="/"
                    >
                      Write a review
                    </a>
                  </div>
                )}
              </div>

              {/* Review Form */}
              <div className="review-form py-3">
                <h5 className="text-muted mb-3">Write a Review</h5>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name" 
                    />
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                    <div className="py-3 px-2">
                      <p className="mb-2 text-muted">Your Rating</p>
                      <ReactStars>
                        count={5}
                        size={28}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                        onChange={(e)=>{
                          setStar(e)
                        }}
                      </ReactStars>
                    </div>

                    <textarea
                      className="w-100 form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Write your review"
                      onChange={(e)=>{
                        setComment(e.target.value)
                      }}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end mt-3">
                    <button onClick={addRatingToProduct} className="button mt-0 border-0" type="button">Submit</button>
                  </div>
              </div>

              {/* Reviews */}
              <div className="reviews my-5 pb-5">
                <div className="review">
                  <div className="d-flex align-items-center gap-10">
                    <h6 className="mb-0">Krisha</h6>
                    <ReactStars>
                      count={5}
                      size={28}
                      value={3}
                      edit={true}
                      activeColor="#ffd700"
                    </ReactStars>
                  </div>

                  <p className="text-muted mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus optio doloribus ab quibusdam officiis esse,
                    asperiores doloremque neque voluptas vero necessitatibus.
                    Facere aliquid neque totam illum excepturi iusto rerum
                    reiciendis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/*Popular Products */}
      <Container class1="popular-wrapper pb-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Popular Products </h3>
          </div>
          <ProductCard data={popularProduct}/>
        </div>
      </Container>
    </>
  );
};
export default SingleProduct;
