import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "category1",
    title: "category title 1",
  },
  {
    id: "category2",
    title: "category title 2",
  },
  {
    id: "category3",
    title: "category title 3",
  },
  {
    id: "category4",
    title: "category title 4",
  },
  {
    id: "category7",
    title: "category title 7",
  },
  {
    id: "category8",
    title: "category title 8",
  },
  {
    id: "category9",
    title: "category title 9",
  },
];

const CategorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
});

export const categorySelector = createSelector(
  (state) => state.category,
  (category) => category
);

export default CategorySlice.reducer;
