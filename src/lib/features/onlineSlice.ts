import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { init } from "next/dist/compiled/webpack/webpack";
import { initialize } from "next/dist/server/lib/render-server";

export interface OnlineState {
  online: boolean;
}

const initialState: OnlineState = {
  online: true,
};

export const onlineSlice = createSlice({
  name: "online",
  initialState,
  reducers: {
    setOnline: (state, action: PayloadAction<boolean>) => {
      state.online = action.payload;
    },
    initializeOnline: (state) => {
      state.online = true;
    },
  },
});

export const { setOnline, initializeOnline } = onlineSlice.actions;

export default onlineSlice.reducer;
