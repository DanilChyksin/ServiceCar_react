import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const BASE_URL = "https://testingnil1.ru/assets/output.json";

// export const getFAQService = createAsyncThunk(
//   "service/getService",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch(`${BASE_URL}`);
//       const data = await response.json();
//       return data;
//     } catch (err) {
//       console.log(err);
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );
const salonSlice = createSlice({
  name: "salon",
  initialState: {
    city: "",
    salon: "",
    FAQservice: [],
    isLoading: false,
  },
  reducers: {
    addCityName: (state, { payload }) => {
      state.city = payload;
    },
    addSalonName: (state, { payload }) => {
      state.salon = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getFAQService.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(getFAQService.fulfilled, (state, action) => {
  //     state.FAQservice = action.payload;
  //     state.isLoading = false;
  //   });
  //   builder.addCase(getFAQService.rejected, (state) => {
  //     state.isLoading = false;
  //   });
  // },
});
export default salonSlice.reducer;
export const { addCityName, addSalonName } = salonSlice.actions;
