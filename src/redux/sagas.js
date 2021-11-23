import { apiAction } from "./actions";
import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import { ArticleActionTypes } from "./constants";

export function* watchFetch() {
  yield takeEvery(ArticleActionTypes.FETCH_DATA, fetchWorkerAsync);
}

function* fetchWorkerAsync({ url }) {
  try {
    yield put(apiAction.fetchStart());
    const data = yield call(() => {
      return axios.get(url).then((res) => res.data);
    });
    yield put(apiAction.fetchSuccess(data));
  } catch (error) {
    yield put(apiAction.errorMessage());
  }
}
