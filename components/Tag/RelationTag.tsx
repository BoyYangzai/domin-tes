import { Tag } from "antd";
import Image from "next/image";
import React from "react";

export default function RelationTag() {
  return (
    <Tag color="#FF2C9E">
      <div className="w-full flex items-center gap-x-0.5">
        <Image
          src="/svg/love.svg"
          width={100}
          height={100}
          alt=""
          className="w-3 h-3"
        ></Image>
        My lover
      </div>
    </Tag>
  );
}
