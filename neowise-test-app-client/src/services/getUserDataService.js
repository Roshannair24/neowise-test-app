import { url } from "../config/url";
import axios from "axios";

let responseAxios = null;

export const getUserDataApi = async (action) => {
  const payload = action.payload;

  let accessToken = sessionStorage.getItem("accessToken");

  console.log("accessToken=====>", accessToken);

  await axios
    .get(`${url}/api/users/${action?.payload?.uuid}`, {
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
