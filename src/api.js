import { cryptoAssets, cryptoData } from "./data";

export function fakeFetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1);
  });
}

export function fakeFetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1);
  });
}

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     "X-API-KEY": "sPD/whNSjoK8wg7JNaY41624VoWQPSCZEqwpwUEWJTc=",
//   },
// };

// fetch("https://openapiv1.coinstats.app/coins", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     "X-API-KEY": "sPD/whNSjoK8wg7JNaY41624VoWQPSCZEqwpwUEWJTc=",
//   },
// };

// fetch("https://openapiv1.coinstats.app/coins", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
