import { put, call } from "redux-saga/effects";
import { openSnackbar } from "../../reducers/snackbarReducer";

import { getSingleTransactionDetailsApi } from "../../services/getSingleTransactionDetailsService";
import { updateSingleTransactionDetails } from "../../reducers/transactionReducer";

//rorkersaga
export function* getSingleTransactionDetailsSaga(action) {
  let resp = yield call(getSingleTransactionDetailsApi, action);

  if (resp?.data) {
    // yield put(
    //   openSnackbar({
    //     type: "success",
    //     isShow: true,
    //     msg: "test successful",
    //   })
    // );
    yield put(updateSingleTransactionDetails(resp?.data));
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
