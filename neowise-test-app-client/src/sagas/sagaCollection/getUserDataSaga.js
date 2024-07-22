import { put, call } from "redux-saga/effects";
import { openSnackbar } from "../../reducers/snackbarReducer";

import { getUserDataApi } from "../../services/getUserDataService";
import { updateUserdata } from "../../reducers/loginReducer";

//rorkersaga
export function* getUserDataSaga(action) {
  let resp = yield call(getUserDataApi, action);

  if (resp?.data) {
    // yield put(
    //   openSnackbar({
    //     type: "success",
    //     isShow: true,
    //     msg: "test successful",
    //   })
    // );

    yield put(updateUserdata(resp?.data));
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
