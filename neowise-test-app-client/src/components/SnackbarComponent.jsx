import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { closeSnackbar } from "../reducers/snackbarReducer";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarComponent = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.SnackbarReducer.snackbar);

  if (snackbar.isShow) {
    setTimeout(() => {
      dispatch(closeSnackbar());
    }, 2000);
  }

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={snackbar.isShow}
        autoHideDuration={2000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <Alert
          onClose={() => dispatch(closeSnackbar())}
          severity={snackbar.type || "info"}
          sx={{
            width:
              window.innerWidth < 800 ? "100%" : (30 * window.innerWidth) / 100,
          }}
        >
          {snackbar.msg}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default SnackbarComponent;
// Snackbar type [error, warning, info, success]
