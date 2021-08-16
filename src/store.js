import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./Saga";
import { FilterSlice, topAlbumsSlice } from "./Slice";

export const { fetchTopAlbums } = topAlbumsSlice.actions;
export const {
  addCategory,
  removeCategory,
  addReleaseDateFilter,
  removeReleaseDateFilter,
} = FilterSlice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    topAlbums: topAlbumsSlice.reducer,
    Filter: FilterSlice.reducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
