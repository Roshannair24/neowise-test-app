import { url } from "../config/url";
import axios from "axios";

let responseAxios = null;

export const postUserDataApi = async (action) => {
  const payload = action.payload;
  const token = localStorage.getItem('jwtToken'); // Replace with your token retrieval logic

  await axios
    .post(`${url}/api/users`, payload, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // Add any other headers you need
      }
    })
    .then((res) => {
      responseAxios = res;
    })
    .catch((err) => {
      // Handle error
    });

  return responseAxios;
};
