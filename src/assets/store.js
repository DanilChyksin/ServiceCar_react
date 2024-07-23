import { configureStore } from "@reduxjs/toolkit";
import salonSlice from "./salonSlice";

export const store = configureStore({
  reducer: {
    salon: salonSlice,
  },
});
