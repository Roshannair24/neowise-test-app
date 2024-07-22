import { put, call } from "redux-saga/effects";
import { openSnackbar } from "../../reducers/snackbarReducer";

import { createTransactionApi } from "../../services/createTransactionService";
import { updateTransactions } from "../../reducers/transactionReducer";
import { getUserData } from "../../reducers/loginReducer";

//rorkersaga
export function* createTransactionSaga(action) {
  let resp = yield call(createTransactionApi, action);

  if (resp?.data?.msg === "Transaction executed") {
    yield put(
      openSnackbar({
        type: "success",
        isShow: true,
        msg: "Transaction executed",
      })
    );
    yield put(updateTransactions([]));

    yield put(getUserData({ uuid: action?.payload?.paramObjUuid }));
  } else {
    yield put(
      openSnackbar({
        type: "error",
        isShow: true,
        msg: resp?.data?.error || resp?.data?.msg || "Error",
      })
    );
  }
}
