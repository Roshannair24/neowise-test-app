import { put, call } from "redux-saga/effects";
import { openSnackbar } from "../../reducers/snackbarReducer";

import { getUserDataApi } from "../../services/getUserDataService";
import { updateUserdata } from "../../reducers/loginReducer";

//rorkersaga
export function* getUserDataSaga(action) {
  console.log("getUserDataSaga action", action);

  let resp = yield call(getUserDataApi, action);

  console.log("getUserDataSaga resp.data", resp?.data);

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
        msg: resp?.data?.msg || "Error",
      })
    );
  }
}
