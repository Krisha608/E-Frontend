import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactService } from "./contactService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const createQuery = createAsyncThunk(
  "contact/post",
  async (contactData, thunkAPI) => {
    try {
      const response = await contactService.postQuery(contactData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  contact: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createQuery.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createQuery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.contact = action.payload;
      if (state.isSuccess && state.contact) {
        toast.success("Message is sent!", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(createQuery.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      if (state.isError) {
        toast.error(state.message);
      }
    });
  },
});

export default contactSlice.reducer;
