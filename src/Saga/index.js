import { takeLatest } from "redux-saga/effects";
import { sagaActions } from "./SagaActions";
import { fetchTopAlbumsSaga } from "./Dashboard";

export default function* rootSaga() {
  yield takeLatest(sagaActions.FETCH_TOP_ALBUMS, fetchTopAlbumsSaga);
}
