import { request } from "./request";

export const userInfo = async () => {
  return request({
    url: "/user/info",
    method: "GET",
  });
};
