import { request } from "./request";

export function logout() {
  return request({
    method: "post",
    url: "/api/account/logout",
  });
}