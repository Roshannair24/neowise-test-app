import { put, call } from "redux-saga/effects";
import { openSnackbar } from "../../reducers/snackbarReducer";

import { postLoginCredApi } from "../../services/postLoginCredService";
import { updateAccessToken } from "../../reducers/loginReducer";
//rorkersaga
export function* postLoginCredSaga(action) {
  console.log("postLoginCredSaga action", action);

  let resp = yield call(postLoginCredApi, action);

  console.log("resp.data", resp?.data);

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
        msg: resp?.data?.msg || "Error",
      })
    );
  }
}
