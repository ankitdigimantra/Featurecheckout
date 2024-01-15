import { fetchOptions } from "../constants";

export const fetchUrl = async (url) => {
  return new Promise((resolve, reject) =>
    fetch(url, fetchOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return reject(res);
      })
      .then((data) => {
        if (data) {
          resolve(data);
          return data;
        }
      })
      .catch((error) => {
        reject(error);
      })
  );
};