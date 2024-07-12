import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { userLogin } from "../request/auth";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { userInfo } from "../request/user";

const useAuth = () => {
  const { user } = useUser()
  const userInfoQuery = useMutation({
    mutationKey: ['userInfo'],
    mutationFn: userInfo,
    onSuccess(data, variables, context) {
      console.log(data)
    },
  })
  const query = useMutation({
    mutationKey: ['userLogin'],
    mutationFn: userLogin,
    async onSuccess(data, variables, context) {
      console.log(data)
      message.success('Login success')
      await userInfoQuery.mutate()

    },
  })
  useEffect(() => {
    if (user) {
      console.log(user, 1111)
      query.mutate(user)
    }
  }, [user?.sub])
};

export default useAuth;
