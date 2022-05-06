import api from "../Api/Api";
import { constants as API_CONST } from "../Api/Url";

export const FirstRequestWithoutToken = (payData) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(API_CONST.USER, payData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const HomeResponse = (page, payData) => {
  return new Promise(async (resolve, reject) => {
    return api
      .postWithToken(API_CONST.MENU_1 + page, payData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const MovieAPI = (url, payData) => {
  return new Promise(async (resolve, reject) => {
    return api
      .postWithToken(url, payData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const RefreshToken = (payData) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(API_CONST.REFRESH_TOKEN, payData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
