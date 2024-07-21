import { useEffect, useState } from "react";
import { openSnackbar } from "../reducers/snackbarReducer";
import { Input, TextField, withStyles } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import moment from "moment";
import { getUserData } from "../reducers/loginReducer";
import { getTransactions } from "../reducers/transactionReducer";

const HomepageContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paramObj = useParams();

  const [page, setpage] = useState(1);

  const authLatestReduxState = useSelector((state) => state?.authReducer);
  const transactionsLatestReduxState = useSelector(
    (state) => state?.transactionReducer
  );
  console.log(" paramObj ", paramObj);

  console.log("authLatestReduxState ", authLatestReduxState);
  console.log("transactionsLatestReduxState", transactionsLatestReduxState);

  useEffect(() => {
    console.log(" paramObj?.uuid yoooo", paramObj?.uuid);

    dispatch(
      getUserData({
        uuid: paramObj?.uuid,
      })
    );
  }, [paramObj?.uuid]);

  useEffect(() => {
    dispatch(
      getTransactions({
        page: page,
        limit: 5,
      })
    );
  }, [page]);

  const getNextPage = () => {
    setpage((prev) => prev + 1);
  };

  const getPreviousPage = () => {
    if (page > 1) {
      setpage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-col-primary h-100vh d-flex d-flex-dir-column d-flex-align-items-cent p-1">
      <div
        // style={{ backgroundColor: "red" }}
        className="w-70 d-flex d-flex-dir-column gap-1 p-1  rad-8-all"
      >
        <div className="d-flex d-flex-space-between">
          <div className="d-flex d-flex-dir-column ">
            <div className="f-20 t-left weight-600 col-yellow-1">
              {authLatestReduxState?.userData?.name}
            </div>
            <div className="f-14 t-left">
              <span className="col-yellow-1">
                {" "}
                {authLatestReduxState?.userData?.id}
              </span>
            </div>
          </div>

          <div className="d-flex d-flex-dir-column justify-flex-end ">
            <div className="f-14 t-left col-bg-grey-1">
              Balance:{" "}
              <span className="f-20 weight-600 col-yellow-1">
                {" "}
                {authLatestReduxState?.userData?.balance}{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="d-flex d-flex-space-between">
          <div> Transactions</div>

          <div className="w-20">
            <div
              style={{
                width: "100%",
                // backgroundColor: "yellow"
              }}
            >
              <Button
                variant="contained"
                // color="primaryPallete"
                // onClick={validateInput}
                sx={{ width: "100%" }}
              >
                Create new transaction
              </Button>
            </div>
          </div>
        </div>

        <div className="d-flex d-flex-dir-column gap-1">
          <div className="d-flex gap-0-5 font-14 weight-600 col-bg-grey-1">
            <div className="w-20">Time</div>
            <div className="w-20">Sender</div>
            <div className="w-20">Receiver</div>
            <div className="w-20">Amount</div>
            <div className="w-20 col-primary">----</div>
          </div>

          {transactionsLatestReduxState?.transactionsList?.map(
            (item, index) => {
              return (
                <div
                  className="d-flex gap-0-5 font-14 bg-col-bg-grey-4 col-bg-grey-1 p-0-5"
                  key={index}
                >
                  <div className="w-20">
                    {moment(item?.updatedAt).format("DD/MM/YY hh:mm:ss A")}
                  </div>
                  <div className="w-20">{item?.senderId}</div>
                  <div className="w-20">{item?.receiverId}</div>
                  <div className="w-20">{item?.amount}</div>
                  <div className="w-20">
                    <div
                      style={{
                        width: "100%",
                        // backgroundColor: "yellow"
                      }}
                    >
                      <Button
                        variant="outlined"
                        // color="primaryPallete"
                        // onClick={validateInput}
                        sx={{ width: "100%" }}
                      >
                        Reverse transaction
                      </Button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div className="d-flex d-flex-space-between">
          <div className="w-20">
            <div
              style={{
                width: "100%",
                // backgroundColor: "yellow"
              }}
            >
              <Button
                variant="outlined"
                // color="primaryPallete"
                onClick={getPreviousPage}
                sx={{ width: "100%" }}
              >
                previous
              </Button>
            </div>
          </div>

          <div className="w-20">
            <div
              style={{
                width: "100%",
                // backgroundColor: "yellow"
              }}
            >
              <Button
                variant="outlined"
                // color="primaryPallete"
                onClick={getNextPage}
                sx={{ width: "100%" }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageContainer;
