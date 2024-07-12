import Image from "next/image";
import React from "react";
import MainButton from "../MainButton";
import AgeTag from "../Tag/AgeTag";
import RelationTag from "../Tag/RelationTag";

export default function HomeItemCard() {
  return (
    <div className="h-64 w-[48%] overflow-hidden rounded-lg flex-col flex ">
      <Image
        src="/img/t-role.png"
        alt=""
        width={200}
        height={300}
        className="w-full h-[70%]"
      ></Image>
      <div className="bg-[#2c2d2d] h-auto flex-1 relative p-2.5">
        <div className="w-full h-16 absolute -top-16 flex text-white font-bold items-center">
          <Image
            src="/img/mask.png"
            alt=""
            width={200}
            height={300}
            className="w-full h-full absolute"
          ></Image>
          <div className="relative z-10 p-2.5">樱木纱织</div>
        </div>

        <div className="flex gap-x-1">
          <AgeTag gender="female" age={18}></AgeTag>
          <RelationTag></RelationTag>
        </div>

        <div className="flex justify-center mt-2">
          <MainButton
            style={{
              width: "100%",
            }}
          >
            👋🏻 Say hi
          </MainButton>
        </div>
      </div>
    </div>
  );
}
