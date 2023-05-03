import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.registerUser(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Login user
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.loginUser(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Get user wishlist
export const getUserProductWishlist = createAsyncThunk(
  "user/wishlist",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.getUserWishlist(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Add to user cart
export const addProductToCart = createAsyncThunk(
  "user/cart/add",
  async (cartData, thunkAPI) => {
    try {
      const response = await authService.addToCart(cartData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createAnOrder = createAsyncThunk(
  "user/cart/create-order",
  async (orderDetail, thunkAPI) => {
    try {
      const response = await authService.createOrder(orderDetail);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Get user cart
export const getUserCart = createAsyncThunk(
  "user/cart/get",
  async (thunkAPI) => {
    try {
      const response = await authService.getCart();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// delete product from cart
export const deleteCartProduct = createAsyncThunk(
  "user/cart/product/delete",
  async (cartItemId, thunkAPI) => {
    try {
      const response = await authService.removeProductFromCart(cartItemId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// update product quantity in cart
export const updateCartProduct = createAsyncThunk(
  "user/cart/product/update",
  async (cartData, thunkAPI) => {
    try {
      const response = await authService.updateProductQuantityInCart(cartData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getOrders = createAsyncThunk(
  "user/orders/get",
  async (thunkAPI) => {
    try {
      const response = await authService.getUserOrders();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/profile/update",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.updateUser(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const forgotPasswordToken = createAsyncThunk(
  "user/password/token",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.forgotPassToken(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "user/password/reset",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.resetPass(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const getCustomerFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
  user: getCustomerFromLocalStorage,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.createdUser = action.payload;
      if (state.isSuccess && state.createdUser) {
        toast.success("User created successfully", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    // Login user
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.user = action.payload;

      if (state.isSuccess && state.user) {
        localStorage.setItem("token", state.user.token);
        toast.success("User is logged in!", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    // Get user wishlist
    builder.addCase(getUserProductWishlist.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserProductWishlist.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.userWishlist = action.payload;
    });
    builder.addCase(getUserProductWishlist.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    // Add to user cart
    builder.addCase(addProductToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.productToCart  = action.payload;
      if (state.isSuccess && state.productToCart) {
        toast.success("Product added to cart!", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(addProductToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    // Get user cart
    builder.addCase(getUserCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.cartProducts = action.payload;
    });
    builder.addCase(getUserCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      if (state.isError) {
        toast.error(state.message);
      }
    });
    builder.addCase(deleteCartProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCartProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.deletedCartProduct = action.payload;
      if (state.isSuccess && state.deletedCartProduct) {
        toast.success("Product is removed!", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(deleteCartProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    // Update product quantity in cart
    builder.addCase(updateCartProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateCartProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.updatedCartProduct = action.payload;
      if (state.isSuccess && state.updatedCartProduct) {
        toast.success("Product is updated!", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(updateCartProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    builder.addCase(createAnOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createAnOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.orderedProduct = action.payload;
      if (state.isSuccess && state.updatedCartProduct) {
        toast.success("Ordered Successfully");
      }
    });
    builder.addCase(createAnOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      if (state.isError) {
        toast.error(state.message);
      }
    });
    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.getOrderedProducts = action.payload;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      if (state.isError) {
        toast.error(state.message);
      }
    });
    builder.addCase(updateUserProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.updatedUser = action.payload;
      if (state.isSuccess && state.updatedUser) {
        toast.success("Profile is updated!", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    builder.addCase(forgotPasswordToken.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(forgotPasswordToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.token = action.payload;
      if (state.isSuccess && state.updatedUser) {
        toast.success("Email sent successfully for reset password!", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(forgotPasswordToken.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.pass = action.payload;
      if (state.isSuccess && state.updatedUser) {
        toast.success("Password updated successfully !", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      if (state.isError) {
        toast.error(state.message);
      }
    });
  },
});

export default authSlice.reducer;

