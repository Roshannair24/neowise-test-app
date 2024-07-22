import { put, call } from "redux-saga/effects";
import { openSnackbar } from "../../reducers/snackbarReducer";

import { deleteTransactionApi } from "../../services/deleteTransactionService";
import { getTransactions } from "../../reducers/transactionReducer";

//rorkersaga
export function* deleteTransactionSaga(action) {
  console.log("deleteTransaction action", action);

  let resp = yield call(deleteTransactionApi, action);

  console.log("resp", resp?.data);

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
