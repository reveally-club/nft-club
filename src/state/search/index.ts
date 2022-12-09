import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface SearchState {
  text: string;
}

const initialState: SearchState = {
  text: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (
      state: SearchState,
      action: PayloadAction<{ text: string }>
    ) => {
      state.text = action.payload.text;
    },
  },
});

export const { setSearchText } = searchSlice.actions;

export const selectSearch = (state: RootState) => state;

export default searchSlice.reducer;
