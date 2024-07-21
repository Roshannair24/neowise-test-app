import { url } from "../config/url";
import axios from "axios";

let responseAxios = null;

export const getTransactionsApi = async (action) => {
  const payload = action.payload;

  let accessToken = sessionStorage.getItem("accessToken");

  console.log("getTransactionsApi payload =====>", payload);

  await axios
    .get(
      `${url}/api/transactions?page=${payload?.page}&limit=${payload?.limit}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((res) => {
      responseAxios = res;
    })
    .catch((err) => {
      //err
    });

  return responseAxios;
};
