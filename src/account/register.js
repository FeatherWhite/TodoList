import { request } from "./request";

export function register(userRegisterInfo) {
  return request({
    method: "post",
    url: "/api/account/register",
    data: {
      Username: userRegisterInfo.userName,
      Password: userRegisterInfo.password,
      ConfirmPassword: userRegisterInfo.ConfirmPassword
    },
  });
}