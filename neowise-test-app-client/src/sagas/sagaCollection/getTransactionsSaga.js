import { put, call } from "redux-saga/effects";
import { openSnackbar } from "../../reducers/snackbarReducer";

import { getTransactionsApi } from "../../services/getTransactionsService";
import { updateTransactions } from "../../reducers/transactionReducer";

//rorkersaga
export function* getTransactionsSaga(action) {
  console.log("getTransactionsSaga action", action);

  let resp = yield call(getTransactionsApi, action);

  console.log(" getTransactionsSaga resp.data", resp?.data);

  if (resp?.data) {
    // yield put(
    //   openSnackbar({
    //     type: "success",
    //     isShow: true,
    //     msg: "test successful",
    //   })
    // );

    yield put(updateTransactions(resp?.data));
  } else {
    yield put(
      openSnackbar({
        type: "error",
        isShow: true,
        msg: resp?.data?.msg || "Error",
      })
    );
  }
}
