import { url } from "../config/url";
import axios from "axios";

let responseAxios = null;

export const deleteTransactionApi = async (action) => {
  const payload = action.payload;

  let accessToken = sessionStorage.getItem("accessToken");

  await axios
    .delete(`${url}/api/transactions/${payload?.transactionId}`, {
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
