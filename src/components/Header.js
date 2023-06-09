import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Profile from "../pages/Profile";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const Header = () => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const [paginate, setPaginate] = useState(true);
  const userCartState = useSelector(state => state?.auth?.cartProducts);
  const userState = useSelector(state => state?.auth);
  const productState=useSelector(state=>state?.product?.product)
  const [productOpt,setProdctOpt] =useState([])
const navigate=useNavigate()

  console.log(userCartState);
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < userCartState?.length; i++) {
      sum += userCartState[i]?.price * userCartState[i]?.quantity;
    }
    setTotalAmount(sum);
  }, [userCartState]);

  useEffect(()=>{
    let data = []
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      data.push({id:index,prod:element?._id,name:element?.title})
    }
    setProdctOpt(data)
  },[productState])

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+91 8264954234">
                  +91 8264954234
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white fs-3">E-Accessories</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results Paginated")}
                  onChange={(selected)=>{
                    navigate(`/product/${selected[0]?.prod}`)
                  }}
                  options={productOpt} 
                  paginate={paginate}
                  labelKey={"name"}
                  minLength={2}
                  placeholder="Search for Products here..."
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    // to="/login"
                    to={userState?.user === null ? "/login" : "/my-profile"}
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={user} alt="user" />
                    {/* <p className="mb-0">
                      Log in <br /> My Account
                    </p> */}
                    {userState?.user === null ? (
                      <p className="mb-0">
                        Log in <br /> My Account
                      </p>
                    ) : (
                      <p className="mb-0">
                        Hi,
                        <br /> {userState?.user?.firstname}
                      </p>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      {/* <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p> */}
                      <span className="badge bg-white text-dark fs-6">
                        {userCartState?.length ? userCartState?.length : 0}
                      </span>
                      <p className="mb-0 mt-1">
                        ${totalAmount ? totalAmount.toFixed(2) : "0.00"}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/my-orders">My Orders</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button
                      onClick={handleLogout}
                      className="border border-0 bg-transparent text-white text-uppercase"
                      type="button"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
