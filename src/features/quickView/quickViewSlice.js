import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

export const quickViewSlice = createSlice({
  name: 'quickView',
  initialState,
  reducers: {
    openQuickView:(state, action) => {
        return action.payload;
  },
  closeQuickView :()=>{
    return null;
  }
}
});

export const {
    openQuickView,
    closeQuickView
} = quickViewSlice.actions;

export const selectQuickViewProductsCount = (state) => state.quickView.length;

export const selecQuickViewProducts = (state) => state.quickView;

export default quickViewSlice.reducer;
