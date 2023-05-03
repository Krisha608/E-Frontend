import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.getOrderedProducts);
  console.log("orderState", orderState);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <>
      <Meta title={"My Orders"} />
      <BreadCrumb title="My Orders" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="row p-3" style={{ backgroundColor: "#febd69" }}>
              <div className="col-3">
                <h6>Order Id</h6>
              </div>
              <div className="col-3">
                <h6>Amount</h6>
              </div>
              <div className="col-3">
                <h6>Total Amount after discount</h6>
              </div>
              <div className="col-3">
                <h6>Status</h6>
              </div>
            </div>
            <hr className="row mt-3" />
          </div>

          <div className="col-12 mt-3">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div className="row p-3" key={index}>
                    <div className="col-3">
                      <p className="">{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p className="">{item?.totalPrice}</p>
                    </div>
                    <div className="col-3">
                      <p className="">{item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className="col-3">
                      <p className="">{item?.orderStatus}</p>
                    </div>
                    {/* 
                    <div
                      className="row p-3 mt-3"
                      style={{ backgroundColor: "#febd69" }}
                    >
                      <div className="col-3">
                        <h6>Product Name</h6>
                      </div>

                      <div className="col-3">
                        <h6>Quantity</h6>
                      </div>
                      <div className="col-3">
                        <h6>Price</h6>
                      </div>
                      <div className="col-3">
                        <h6>Color</h6>
                      </div>
                    </div>

                    <hr className="row mt-3" /> */}

                    {/* {item?.orderItems?.map((item, index) => {
                      return (
                        <div className="col-12" key={index}>
                          <div className="row p-3">
                            <div className="col-3">
                              <p className="">{item?.product?.title}</p>
                            </div>

                            <div className="col-3">
                              <p className="">{item?.quantity}</p>
                            </div>
                            <div className="col-3">
                              <p className="">{item?.price}</p>
                            </div>
                            <div className="col-3">
                              <ul className="colors ps-0">
                                <li
                                  style={{ backgroundColor: item?.color.title }}
                                ></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })} */}
                  </div>
                );
              })}
          </div>

          <div className="col-12 mt-3">
            <div
              className="row p-3 mt-3"
              style={{ backgroundColor: "#febd69" }}
            >
              <div className="col-3">
                <h6>Product Name</h6>
              </div>

              <div className="col-3">
                <h6>Quantity</h6>
              </div>
              <div className="col-3">
                <h6>Price</h6>
              </div>
              <div className="col-3">
                <h6>Color</h6>
              </div>
            </div>

            <hr className="row mt-3" />
          </div>
          <div className="col-12 mt-3">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div className="row p-3" key={index}>
                    {/* <div className="col-3">
                      <p className="">{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p className="">{item?.totalPrice}</p>
                    </div>
                    <div className="col-3">
                      <p className="">{item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className="col-3">
                      <p className="">{item?.orderStatus}</p>
                    </div> */}
                    {/* 
                    <div
                      className="row p-3 mt-3"
                      style={{ backgroundColor: "#febd69" }}
                    >
                      <div className="col-3">
                        <h6>Product Name</h6>
                      </div>

                      <div className="col-3">
                        <h6>Quantity</h6>
                      </div>
                      <div className="col-3">
                        <h6>Price</h6>
                      </div>
                      <div className="col-3">
                        <h6>Color</h6>
                      </div>
                    </div>

                    <hr className="row mt-3" /> */}

                    {item?.orderItems?.map((item, index) => {
                      return (
                        <div className="col-12" key={index}>
                          <div className="row p-3">
                            <div className="col-3">
                              <p className="">{item?.product?.title}</p>
                            </div>

                            <div className="col-3">
                              <p className="">{item?.quantity}</p>
                            </div>
                            <div className="col-3">
                              <p className="">{item?.price}</p>
                            </div>
                            <div className="col-3">
                              <ul className="colors ps-0">
                                <li
                                  style={{ backgroundColor: item?.color.title }}
                                ></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
