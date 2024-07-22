import { useEffect, useState } from "react";
import { openSnackbar } from "../reducers/snackbarReducer";
import { Input, TextField, withStyles } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { postLoginCred } from "../reducers/loginReducer";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [uuid, setUuid] = useState("");
  const [password, setPassword] = useState("");

  const validateInput = () => {
    if (uuid === "" || password === "") {
      dispatch(
        openSnackbar({
          type: "error",
          isShow: true,
          msg: "Invalid Input",
        })
      );
    } else {
      dispatch(
        postLoginCred({
          uuid: uuid,
          password: password,
        })
      );
    }
  };

  const authLatestReduxState = useSelector((state) => state?.authReducer);

  useEffect(() => {
    if (authLatestReduxState?.accessToken !== "") {
      sessionStorage.setItem("accessToken", authLatestReduxState?.accessToken);

      navigate(`/home/${uuid}`);
    }
  }, [authLatestReduxState?.accessToken]);

  return (
    <div className="bg-col-primary h-100vh d-flex d-flex-align-items-cent d-flex-justify-content-cent">
      <div
        style={{ width: "40%" }}
        className="d-flex d-flex-dir-column rad-8-all shadow-2-5 border-bg-grey-3 bg-s-white p-1 gap-1"
      >
        <div
          className="d-flex d-flex-dir-column"
          // style={{ backgroundColor: "orange" }}
        >
          {/* <div className="d-flex">Name</div> */}

          <div
            style={{
              width: "100%",
              // backgroundColor: "yellow"
            }}
            className="d-flex"
          >
            <TextField
              sx={{
                width: "100%",
              }}
              // error={nameError}
              id="outlined-basic"
              label="UUID"
              name="UUID"
              variant="outlined"
              type="string"
              onChange={(e) => {
                setUuid(e.target.value);
              }}
            />
          </div>
        </div>

        <div
          className="d-flex d-flex-dir-column"
          // style={{ backgroundColor: "orange" }}
        >
          {/* <div className="d-flex">Name</div> */}

          <div
            style={{
              width: "100%",
              // backgroundColor: "yellow"
            }}
            className="d-flex"
          >
            <TextField
              sx={{
                width: "100%",
              }}
              // error={nameError}
              id="outlined-basic"
              label="Password"
              name="instructor_name"
              variant="outlined"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="t-left f-12">
          <span className="weight-600">Note:</span>  The app is in development mode. Use 'development' as the password to
          login.
        </div>

        <div
          style={{
            width: "100%",
            // backgroundColor: "yellow"
          }}
        >
          <Button
            variant="contained"
            // color="primaryPallete"
            onClick={validateInput}
            sx={{ width: "100%" }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
