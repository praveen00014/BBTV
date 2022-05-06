import api from "../Api/Api";
import { constants as API_CONST } from "../Api/Url";

export const UserRegistration = (payData) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(API_CONST.REGISTER, payData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
