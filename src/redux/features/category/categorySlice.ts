import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICategory {
  title: string;
  slug: string;
}

// Load initial state from localStorage if available
const initialCategoryState: ICategory | null =
  typeof window !== "undefined"
    ? JSON.parse(localStorage?.getItem("category") || "null")
    : null;

const initialState: ICategory = initialCategoryState || {
  title: "",
  slug: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<ICategory>) => {
      const newItem = action.payload;
      state.slug = newItem.slug;
      state.title = newItem.title;

      // Persist category state to localStorage
      localStorage.setItem("category", JSON.stringify(state));
    },
  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
