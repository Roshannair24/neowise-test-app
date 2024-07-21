// import { put, call } from "redux-saga/effects";
// import { openSnackbar } from "../../Reducers/reducersCollection/snackbarReducer";

// import { testApi } from "../../Services/testApi";
//rorkersaga
export function* testSaga(action) {
  console.log("testSaga action", action);

  //   let resp = yield call(testApi, action);

  //   if (resp?.data?.msg === "test successful") {
  //     yield put(
  //       openSnackbar({
  //         type: "success",
  //         isShow: true,
  //         msg: "test successful",
  //       })
  //     );
  //   } else {
  //     yield put(
  //       openSnackbar({
  //         type: "error",
  //         isShow: true,
  //         msg: "Error",
  //       })
  //     );
  //   }
}
