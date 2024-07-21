import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterSlice from "../reducers/testSlice";
import rootSaga from "../sagas/rootSaga";
import snackbarSlice from "../reducers/snackbarReducer";
import authSlice from "../reducers/loginReducer";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterSlice,
    SnackbarReducer: snackbarSlice,
    authReducer: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);
