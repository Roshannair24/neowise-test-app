import { url } from "../config/url";
import axios from "axios";

let responseAxios = null;

export const getSingleTransactionDetailsApi = async (action) => {
  const payload = action.payload;

  let accessToken = sessionStorage.getItem("accessToken");

  console.log(" getSingleTransactionDetailsApi payload =====>", payload);

  await axios
    .get(`${url}/api/transactions/${payload?.transactionId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      responseAxios = res;
    })
    .catch((err) => {
      //err
    });

  return responseAxios;
};
