import { useEffect, useState } from "react";
import { openSnackbar } from "../reducers/snackbarReducer";
import { Input, TextField, withStyles } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import moment from "moment";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import {
  getSingleTransactionDetails,
  updateSingleTransactionDetails,
} from "../reducers/transactionReducer";

const TransactionDetailsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paramObj = useParams();

  useEffect(() => {
    console.log("paramObj", paramObj);

    dispatch(
      getSingleTransactionDetails({
        transactionId: paramObj?.transactionId,
      })
    );

    //clean up
    return () => {
      dispatch(updateSingleTransactionDetails({}));
    };
  }, []);

  const transactionsLatestReduxState = useSelector(
    (state) => state?.transactionReducer
  );

  console.log("transactionsLatestReduxState", transactionsLatestReduxState);

  return (
    <div className="bg-col-primary h-100vh d-flex d-flex-dir-column d-flex-align-items-cent p-1">
      <div
        // style={{ backgroundColor: "red" }}
        className="w-70 d-flex d-flex-dir-column gap-1 p-1  rad-8-all"
      >
        <div
          className="d-flex d-flex-space-between"
          //   style={{ backgroundColor: "blue" }}
        >
          <div className="f-20 col-yellow-1 weight-600">
            {" "}
            Transaction Details
          </div>

          <div
            className="d-flex f-16 d-flex-align-items-cent weight-600 col-bg-grey-1 cursor"
            // style={{ backgroundColor: "green" }}
            onClick={() => navigate(`/home/${paramObj?.uuid}`)}
          >
            <ArrowBackOutlinedIcon /> Home
          </div>
        </div>
        <div
          className="d-flex d-flex-dir-column bg-col-bg-grey-4 rad-8-all p-1 gap-1"
          //   style={{ backgroundColor: "blue" }}
        >
          <div className="d-flex d-flex-space-between">
            <div className="d-flex d-flex-dir-column gap-0-5">
              <div className="f-20 weight-600 col-bg-grey-1 t-left">
                {
                  transactionsLatestReduxState?.currentTransactionDetails
                    ?.details
                }
              </div>

              <div className="f-14 col-bg-grey-1 t-left">
                {moment(
                  transactionsLatestReduxState?.currentTransactionDetails
                    ?.updatedAt
                ).format("DD/MM/YY hh:mm:ss A")}
              </div>
            </div>

            <div className="d-flex d-flex-dir-column justify-flex-end">
              <div className="f-14 col-bg-grey-1 t-right">
                TransactionId:{" "}
                <span className="weight-600 col-yellow-1">
                  {
                    transactionsLatestReduxState?.currentTransactionDetails
                      ?.transactionId
                  }
                </span>
              </div>

              <div className="f-14 col-bg-grey-1 t-right">
                Amount:{" "}
                <span className="weight-600 col-yellow-1">
                  {
                    transactionsLatestReduxState?.currentTransactionDetails
                      ?.amount
                  }
                </span>
              </div>
            </div>
          </div>

          <div
            // style={{ backgroundColor: "blue" }}
            className="d-flex d-flex-dir-column"
          >
            <div className="f-14 col-bg-grey-1 t-left">
              SenderId:{" "}
              <span className="weight-600 col-bg-grey-1">
                {
                  transactionsLatestReduxState?.currentTransactionDetails
                    ?.senderId
                }
              </span>
            </div>

            <div className="f-14 col-bg-grey-1 t-left">
              ReceiverId:{" "}
              <span className="weight-600 col-bg-grey-1">
                {
                  transactionsLatestReduxState?.currentTransactionDetails
                    ?.receiverId
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailsContainer;
