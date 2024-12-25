import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    plus: (state, { payload }) => {
      payload === "plus"
        ? (state.count += 1)
        : payload === "minus"
        ? (state.count -= 1)
        : (state.count = 0);
    },
  },
});

export const { plus } = countSlice.actions;
export default countSlice.reducer;
