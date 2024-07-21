import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
//reducers
import { increment } from "../reducers/testSlice";
import { postLoginCred, getUserData } from "../reducers/loginReducer";
import { getTransactions } from "../reducers/transactionReducer";
//sagas
import { testSaga } from "./sagaCollection/testSaga";
import { postLoginCredSaga } from "./sagaCollection/postLoginCredSaga";
import { getUserDataSaga } from "./sagaCollection/getUserDataSaga";
import { getTransactionsSaga } from "./sagaCollection/getTransactionsSaga";

//watcher saga
function* rootSaga() {
  yield all([
    yield takeLatest(increment, testSaga),

    yield takeLatest(postLoginCred, postLoginCredSaga),

    yield takeLatest(getUserData, getUserDataSaga),

    yield takeLatest(getTransactions, getTransactionsSaga),
  ]);
}

export default rootSaga;
