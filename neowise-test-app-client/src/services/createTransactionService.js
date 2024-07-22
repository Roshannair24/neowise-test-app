import { url } from "../config/url";
import axios from "axios";

let responseAxios = null;

export const createTransactionApi = async (action) => {
  const payload = action.payload;

  let accessToken = sessionStorage.getItem("accessToken");

  console.log("createTransactionApi  payload =====>", payload);

  await axios
    .post(`${url}/api/transactions`,payload, {
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
