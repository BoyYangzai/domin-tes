"use client";

import { UnorderedListOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import MainButton from "../../components/MainButton";
import { useUser } from "@auth0/nextjs-auth0/client";

const NAV_LIST = ["Chat", "Programs", "Tools", "Memory"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user,isLoading } = useUser()
  console.log(user)
  
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [userBarVisible, setUserBarVisible] = useState(false);
  const router = useRouter();
  const handleNav = (nav: string) => {
    router.push(nav.toLocaleLowerCase());
  };
  const handleCLickDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };
  const handleCLickAvatar = () => {
    setUserBarVisible(!userBarVisible);
  };

  const ProfileList = [
    {
      title: "yang",
      msg: "yang@gmail.com",
    },
    {
      title: "Sign Out",
      fn() {
        router.push("/login");
      },
    },
  ];

  return (
    <main className="w-full h-screen overflow-hidden">
      <nav className="h-20 flex justify-center items-center  bg-bg shadow-sm dark:bg-gray-900 fixed w-full">
        <div className="w-full flex justify-between items-center">
          <div className="flex h-full justify-center items-center">       
            <Image
            src={"/img/logo.png"}
            alt=""
            width={50}
            height={50}
            className="ml-8"
            ></Image>
            <div className="text-white text-xl font-bold ml-2">
            Sparkhere
          </div>
       </div>
          <div className="mr-8">
            <MainButton
              loading={isLoading}
              onClick={() => {
                //open login page /api/auth/login
                if(user){
                  router.push("/api/auth/logout");
                } else {
                  router.push("/api/auth/login")
                }
              }}
            >
          {user ? "退出" : "登录"}
            </MainButton>
       </div>
         
        </div>
      </nav>
      <div className="mt-20 h-full overflow-y-scroll">
      {children}
      </div>
    </main>
  );
}
