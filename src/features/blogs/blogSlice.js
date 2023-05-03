import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "./blogService";

export const getAllBlogs = createAsyncThunk("blogs/get", async (thunkAPI) => {
  try {
    const response = await blogService.getBlogs();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getABlog = createAsyncThunk("blog/get", async (id, thunkAPI) => {
  try {
    const response = await blogService.getBlog(id);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  blog: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.blog = action.payload;
    });
    builder.addCase(getAllBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });

    // get a blog
    builder.addCase(getABlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getABlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.singleBlog = action.payload;
    });
    builder.addCase(getABlog.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default blogSlice.reducer;
