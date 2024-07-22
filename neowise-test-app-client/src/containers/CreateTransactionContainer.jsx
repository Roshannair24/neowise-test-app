import { useEffect, useState } from "react";
import { openSnackbar } from "../reducers/snackbarReducer";
import { Input, TextField, withStyles } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  createTransaction,
  updateTransactions,
} from "../reducers/transactionReducer";

const CreateTransactionContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paramObj = useParams();

  const [sendersId, setSendersId] = useState("");
  const [receiversId, setReceiversId] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  //errors
  const [sendersIdError, setSendersIdError] = useState(false);
  const [receiversIdError, setReceiversIdError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const allFieldsCheckValidated = () => {
    let flag = true;

    //sendersId check
    if (sendersId === "") {
      flag = false;
      setSendersIdError(true);
    }

    //receiversId check
    if (receiversId === "") {
      flag = false;
      setReceiversIdError(true);
    }

    //amount check
    if (amount < 1) {
      flag = false;
      setAmountError(true);
    }

    //amount check
    if (description === "") {
      flag = false;
      setDescriptionError(true);
    }

    return flag;
  };

  const submitTransaction = () => {
    if (allFieldsCheckValidated() === false) {
    } else {
      console.log("disparhcing...");

      let payloadToDisptach = {
        details: description,
        amount: amount,
        senderId: sendersId,
        receiverId: receiversId,
      };
      dispatch(createTransaction(payloadToDisptach));

      dispatch(updateTransactions([]));
    }
  };

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
              error={sendersIdError}
              id="outlined-basic"
              label="Senders Id"
              name="Senders Id"
              variant="outlined"
              type="string"
              onChange={(e) => {
                setSendersIdError(false);
                setSendersId(e.target.value);
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
              error={receiversIdError}
              id="outlined-basic"
              label="Receivers Id"
              name="Receivers Id"
              variant="outlined"
              type="string"
              onChange={(e) => {
                setReceiversIdError(false);
                setReceiversId(e.target.value);
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
              inputProps={{
                autoComplete: "off",
              }}
              sx={{
                width: "100%",
              }}
              error={amountError}
              InputProps={{
                inputProps: { min: 0 },
              }}
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              type="number"
              name="Amount"
              onKeyPress={(e) => {
                if (
                  e.key === "e" ||
                  e.key === "-" ||
                  e.key === "+" ||
                  e.key === "."
                ) {
                  e.preventDefault();
                }
              }}
              onChange={(e) => {
                setAmountError(false);
                setAmount(e.target.value);
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
              error={descriptionError}
              id="outlined-basic"
              label="Description"
              name="Description"
              variant="outlined"
              type="string"
              onChange={(e) => {
                setDescriptionError(false);
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="d-flex gap-0-5">
          <div
            style={{
              width: "100%",
              // backgroundColor: "yellow"
            }}
          >
            <Button
              variant="outlined"
              // color="primaryPallete"
              onClick={() => navigate(`/home/${paramObj?.uuid}`)}
              sx={{ width: "100%" }}
            >
              Back to Home
            </Button>
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
              onClick={submitTransaction}
              sx={{ width: "100%" }}
            >
              Execute transaction
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTransactionContainer;
