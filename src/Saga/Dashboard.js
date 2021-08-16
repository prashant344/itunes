import { call, put } from "redux-saga/effects";
import { fetchTopAlbums } from "../store";
import callAPI from "./HttpService";
import config from "../Config/index";

export function* fetchTopAlbumsSaga() {
  try {
    let result = yield call(() =>
      callAPI({
        url: `${config.topAlbumsApi}`,
        method: "get",
        body: null,
      })
    );
    yield put(fetchTopAlbums(result));
  } catch (e) {
    yield put({
      type: "FETCH_TOP_ALBUMS_FAILED",
      error: e,
    });
  }
}
