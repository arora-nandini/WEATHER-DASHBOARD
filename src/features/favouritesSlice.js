import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.cities.includes(action.payload)) {
        state.cities.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.cities));
      }
    },
    removeFavorite: (state, action) => {
      state.cities = state.cities.filter((c) => c !== action.payload);
    // Update localStorage with the new list
      localStorage.setItem("favorites", JSON.stringify(state.cities));
    },
  },
});
//Export the generated action creators for use in components
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// Export the reducer function to include it in your Redux store
export default favoritesSlice.reducer;
