import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

// const ProductCard = (props) => {
//   const { grid } = props;
//   console.log(grid);
//   let location = useLocation();

//   return (
//     <>
//       <div
//         className={` ${
//           location.pathname == "/product" ? `gr-${grid}` : "col-3"
//         } `}
//       >
//         <Link
//           to={`${
//             location.pathname == "/"
//               ? "/product/:id"
//               : location.pathname == "/product/:id"
//               ? "/product/:id"
//               : ":id"
//           }`}
//           className="product-card position-relative"
//         >
//           <div className="wishlist-icon position-absolute">
//             <button className="border-0 bg-transparent">
//               <img src={wish} alt="wishlist" />
//             </button>
//           </div>
//           <div className="product-image">
//             <img src={watch} className="img-fluid" alt="product image" />
//             <img src={watch2} className="img-fluid" alt="product image" />
//           </div>
//           <div className="product-details">
//             <h6 className="brand">Havels</h6>
//             <h5 className="product-title">
//               Kids headphones bulk 10 pack multi colored for students
//             </h5>
//             <ReactStars
//               count={5}
//               size={24}
//               value={4}
//               edit={false}
//               activeColor="#ffd700"
//             />
//             <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
//               At vero eos et accusamus et iusto odio dignissimos ducimus qui
//               blanditiis praesentium voluptatum deleniti atque corrupti quos
//               dolores et quas molestias excepturi sint occaecati cupiditate non
//               provident, similique sunt...
//             </p>
//             <p className="price">$100.00</p>
//           </div>
//           <div className="action-bar position-absolute">
//             <div className="d-flex flex-column gap-15">
//               <button className="border-0 bg-transparent">
//                 <img src={prodcompare} alt="compare" />
//               </button>
//               <button className="border-0 bg-transparent">
//                 <img src={view} alt="view" />
//               </button>
//               <button className="border-0 bg-transparent">
//                 <img src={addcart} alt="addcart" />
//               </button>
//             </div>
//           </div>
//         </Link>
//       </div>
//       <div
//         className={` ${
//           location.pathname == "/product" ? `gr-${grid}` : "col-3"
//         } `}
//       >
//         <Link
//           to={`${
//             location.pathname == "/"
//               ? "/product/:id"
//               : location.pathname == "/product/:id"
//               ? "/product/:id"
//               : ":id"
//           }`}
//           className="product-card position-relative"
//         >
//           <div className="wishlist-icon position-absolute">
//             <button className="border-0 bg-transparent">
//               <img src={wish} alt="wishlist" />
//             </button>
//           </div>
//           <div className="product-image">
//             <img src={watch} className="img-fluid" alt="product image" />
//             <img src={watch2} className="img-fluid" alt="product image" />
//           </div>
//           <div className="product-details">
//             <h6 className="brand">Havels</h6>
//             <h5 className="product-title">
//               Kids headphones bulk 10 pack multi colored for students
//             </h5>
//             <ReactStars
//               count={5}
//               size={24}
//               value={4}
//               edit={false}
//               activeColor="#ffd700"
//             />
//             <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
//               At vero eos et accusamus et iusto odio dignissimos ducimus qui
//               blanditiis praesentium voluptatum deleniti atque corrupti quos
//               dolores et quas molestias excepturi sint occaecati cupiditate non
//               provident, similique sunt...
//             </p>
//             <p className="price">$100.00</p>
//           </div>
//           <div className="action-bar position-absolute">
//             <div className="d-flex flex-column gap-15">
//               <button className="border-0 bg-transparent">
//                 <img src={prodcompare} alt="compare" />
//               </button>
//               <button className="border-0 bg-transparent">
//                 <img src={view} alt="view" />
//               </button>
//               <button className="border-0 bg-transparent">
//                 <img src={addcart} alt="addcart" />
//               </button>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// };
// const ProductCard = (props) => {
//   const { grid, data } = props;
//   //console.log(data);
//   let location = useLocation();
//   //console.log(location)

//   const dispatch = useDispatch();
//   const addToWish = (id) => {
//     // console.log(id);
//     dispatch(addToWishlist(id));
//   };

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return (
//             <div
//               key={item._id}
//               className={`${
//                 location.pathname === "/product" ? `gr-${grid}` : "col-3"
//               }`}
//             >
//               <Link
//                 // to={`${
//                 //   location.pathname === "/"
//                 //     ? "product/:id"
//                 //     : location.pathname === "/product/:id"
//                 //     ? "product/:id"
//                 //     : ":id"
//                 // }`}
//                 className="product-card position-relative"
//               >
//                 <div className="wishlist-icon position-absolute">
//                   <button
//                     className="border-0 bg-transparent"
//                     onClick={(e) => addToWish(item._id)}
//                   >

//                     <img src={wish} alt="wishlist" />
//                   </button>
//                 </div>
//                 <div className="product-image">
//                 <img src={watch} className="img-fluid" alt="product image" />
//               <img src={watch2} className="img-fluid" alt="product image" />
//                 </div>
//                 <div className="product-details p-3">
//                   <h6 className="brand mt-1">{item?.brand}</h6>
//                   <h5 className="product-title fs-5">{item.title}</h5>

//                   {/* <ReactStars>
//                     count={5}
//                     size={28}
//                     value={3}
//                     edit={false}
//                     emptyIcon={<i className="far fa-star"></i>}
//                     halfIcon={<i className="fa fa-star-half-alt"></i>}
//                     fullIcon={<i className="fa fa-star"></i>}
//                   </ReactStars> */}
//                   <ReactStars
//                     count={5}
//                     size={24}
//                     value={4}
//                     edit={false}
//                     activeColor="#ffd700"
//                   />
//                   <div
//                     className={`description ${
//                       grid === 12 ? "d-block" : "d-none"
//                     }`}
//                     dangerouslySetInnerHTML={{ __html: item.description }}
//                   ></div>

//                   <span className="price">{`$ ${item.price.toFixed(2)}`}</span>
//                 </div>

//                 {/* Action Bar */}
//                 <div className="action-bar position-absolute">
//                   <div className="d-flex flex-column gap-30">
//                     <button className="border-0 bg-transparent">
//                       <img src={prodcompare} alt="compare" />
//                     </button>
//                     <button className="border-0 bg-transparent">
//                       <img src={view} alt="veiw " />
//                     </button>
//                     <button className="border-0 bg-transparent">
//                       <img src={addcart} alt="add to cart" />
//                     </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//     </>
//   );
// };
const ProductCard = (props) => {
  const { grid, data } = props;
  console.log(data);
  let location = useLocation();
  //console.log(location)

  const dispatch = useDispatch();
  const addToWish = (id) => {
    // console.log(id);
    dispatch(addToWishlist(id));
  };

  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                location.pathname === "/product" ? `gr-${grid}` : "col-3"
              }`}
            >
              <div
                // to={`${
                //   location.pathname === "/"
                //     ? "product/:id"
                //     : location.pathname === "/product/:id"
                //     ? "product/:id"
                //     : ":id"
                // }`}
                className="product-card position-relative"
              >
                <div className="wishlist-icon position-absolute">
                  <button
                    className="border-0 bg-transparent"
                    onClick={(e) => addToWish(item._id)}
                  >
                    <img src={wish} alt="wishlist" />
                  </button>
                </div>
                <div className="product-image">
                  <img src={watch} className="img-fluid" alt="product image" />
                  <img src={watch2} className="img-fluid" alt="product image" />
                </div>
                <div className="product-details p-3">
                  <h6 className="brand mt-1">{item?.brand}</h6>
                  <h5 className="product-title fs-5">{item.title}</h5>

                  <ReactStars>
                    count={5}
                    size={28}
                    value={3}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                  </ReactStars>

                  <div
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>

                  <span className="price">{`$ ${item.price.toFixed(2)}`}</span>
                </div>

                {/* Action Bar */}
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-30">
                    <button className="border-0 bg-transparent">
                      <img src={prodcompare} alt="compare" />
                    </button>
                    <Link
                      to={"/product/" + item._id}
                      className="border-0 bg-transparent"
                    >
                      <img src={view} alt="veiw " />
                    </Link>
                    <button className="border-0 bg-transparent">
                      <img src={addcart} alt="add to cart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
// export default ProductCard;
