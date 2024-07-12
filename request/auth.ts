import { request } from "./request";


export const userLogin = async (data: {
  [key: string]: any;
}) => {
  return request({
    url: "/auth/oauth_login",
    method: "POST",
    data,
  });
};


