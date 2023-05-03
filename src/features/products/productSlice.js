import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (thunkAPI) => {
    try {
      const response = await productService.getProducts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//add to wishlist
export const addToWishlist = createAsyncThunk(
  "product/wishlist",
  async (productId, thunkAPI) => {
    try {
      const response = await productService.addToWishlist(productId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//get a single product
export const getAProduct = createAsyncThunk(
  "product/getAProduct",
  async (prodId, thunkAPI) => {
    try {
      const response = await productService.getSingleProduct(prodId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addRatig = createAsyncThunk(
  "product/ratings",
  async (data, thunkAPI) => {
    try {
      const response = await productService.rateProduct(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  product: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.product = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });

    //add to wishlist
    builder.addCase(addToWishlist.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.addedToWishlist = action.payload;
      state.message = action.payload;
      if (state.isSuccess && state.contact) {
        toast.success("Product is added to wishlist", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(addToWishlist.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    //get a single product
    builder.addCase(getAProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.singleProduct = action.payload;
    });
    builder.addCase(getAProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(addRatig.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addRatig.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.rating = action.payload;
      state.message ="Rating Added Successfully !"
    });
    builder.addCase(addRatig.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });

  },
});

export default productSlice.reducer;
