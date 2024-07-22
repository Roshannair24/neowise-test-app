import { put, call } from "redux-saga/effects";
import { openSnackbar } from "../../reducers/snackbarReducer";

import { postLoginCredApi } from "../../services/postLoginCredService";
import { updateAccessToken } from "../../reducers/loginReducer";
//rorkersaga
export function* postLoginCredSaga(action) {
  let resp = yield call(postLoginCredApi, action);

  if (resp?.data?.accessToken) {
    // yield put(
    //   openSnackbar({
    //     type: "success",
    //     isShow: true,
    //     msg: "test successful",
    //   })
    // );

    yield put(updateAccessToken(resp?.data?.accessToken));
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
