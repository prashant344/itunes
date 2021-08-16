import { createSlice } from "@reduxjs/toolkit";

export const topAlbumsSlice = createSlice({
  name: "topAlbums",
  initialState: {
    albums: [],
    loading: false,
  },
  reducers: {
    fetchTopAlbums: (state, action) => ({
      ...action.payload,
      loading: false,
    }),
  },
});

export const FilterSlice = createSlice({
  name: "Filter",
  initialState: {
    categories: [],
    releaseDate: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
      return state;
    },
    removeCategory: (state, action) => ({
      ...state,
      categories: state.categories.filter((item) => item !== action.payload.id),
    }),
    addReleaseDateFilter: (state, action) => {
      state.releaseDate.push(action.payload);
      return state;
    },
    removeReleaseDateFilter: (state, action) => ({
      ...state,
      releaseDate: state.releaseDate.filter(
        (item) => item !== action.payload.date
      ),
    }),
  },
});
