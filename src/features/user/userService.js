import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    return error.response.data;
  }
};

const loginUser = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    return response.data;
  }
};

const getUserWishlist = async () => {
  try {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return error.response.data;
  }
};

//add to user cart
const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart/`, cartData, config);
  if (response.data) {
    return response.data;
  }
};

//get user cart
const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart/`, config);
  if (response.data) {
    return response.data;
  }
};
//remove product from cart
const removeProductFromCart = async (cartItemId) => {
  //console.log(cartItemId);
  //console.log(config);
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${cartItemId}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

//update product quantity in cart
const updateProductQuantityInCart = async (cartData) => {
  console.log(cartData);
  const response = await axios.delete(
    `${base_url}user/update-product-cart/${cartData.cartItemId}/${cartData.quantity}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const createOrder= async(orderDetail)=>{
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetail,config
  );
  if (response.data) {
    return response.data;
  }
}

const getUserOrders = async () => {
  const response = await axios.get(`${base_url}user/getmyorders`, config);
  if (response.data) {
    return response.data;
  }
};
const updateUser = async (userData) => {
  const response = await axios.put(
    `${base_url}user/update-user`,
    userData,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const forgotPassToken=async(data)=>{
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data);
  if (response.data) {
    return response.data;
  }
}
const resetPass=async(data)=>{
  const response = await axios.put(
    `${base_url}user/reset-password/${data.token}`,{password:data?.password});
  if (response.data) {
    return response.data;
  }
}
export const authService = {
  registerUser,
  loginUser,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductQuantityInCart,
  createOrder,
  getUserOrders,
  updateUser,
  forgotPassToken,
  resetPass
};