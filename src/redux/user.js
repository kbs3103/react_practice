import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { id: "", pwd: "", count: -1 },
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.pwd = action.payload.pwd;
      state.count = 1;
    },
    logout: (state) => {
      state.id = "";
      state.pwd = "";
      state.count = -1;
    },
  },
});

export const userSliceactions = userSlice.actions;
export default userSlice.reducer;
