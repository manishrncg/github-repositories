import axios from "axios";
import { base_url } from "./constants.js";

export const apiCall = function (method, url, headers, data) {
  const newUrl = base_url + url;

  const newHeaders = {
    ...headers,
    ...{
      "Content-Type": "application/json",
    },
  };

  return axios({
    method,
    url: newUrl,
    headers: newHeaders,
    data: data,
  }).then((response) => {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  });
};