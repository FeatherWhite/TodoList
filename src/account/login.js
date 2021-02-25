import { request } from "./request";

export function login(userLoginInfo) {
  return request({
    method: "post",
    url: "/api/account/login",
    data: {
      UserName: userLoginInfo.userName,
      Password: userLoginInfo.password,
    },
  });
}
