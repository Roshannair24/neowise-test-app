import { url } from "../config/url";
import axios from "axios";

let responseAxios = null;

export const postLoginCredApi = async (action) => {
  const payload = action.payload;

  await axios
    .post(`${url}/api/auth/validate-login-cred`, payload)
    .then((res) => {
      responseAxios = res;
    })
    .catch((err) => {
      //err
    });

  return responseAxios;
};
