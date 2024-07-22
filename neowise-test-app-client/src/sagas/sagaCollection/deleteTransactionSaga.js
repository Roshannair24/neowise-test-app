import { put, call } from "redux-saga/effects";
import { openSnackbar } from "../../reducers/snackbarReducer";

import { deleteTransactionApi } from "../../services/deleteTransactionService";
import { getTransactions } from "../../reducers/transactionReducer";

//rorkersaga
export function* deleteTransactionSaga(action) {
  let resp = yield call(deleteTransactionApi, action);

  if (resp?.data?.msg === "Transaction deleted") {
    yield put(
      openSnackbar({
        type: "success",
        isShow: true,
        msg: "Transaction deleted",
      })
    );
    yield put(
      getTransactions({
        page: action?.payload?.page,
        limit: action?.payload?.limit,
      })
    );
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
