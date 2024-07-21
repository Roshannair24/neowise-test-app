import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
//reducers
import { increment } from "../reducers/testSlice";
import { postLoginCred } from "../reducers/loginReducer";
//sagas
import { testSaga } from "./sagaCollection/testSaga";
import { postLoginCredSaga } from "./sagaCollection/postLoginCredSaga";

//watcher saga
function* rootSaga() {
  yield all([
    yield takeLatest(increment, testSaga),

    yield takeLatest(postLoginCred, postLoginCredSaga),
  ]);
}

export default rootSaga;
