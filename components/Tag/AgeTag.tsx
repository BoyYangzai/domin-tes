import { Tag } from "antd";
import Image from "next/image";
import React from "react";

export default function AgeTag({
  gender,
  age,
}: {
  gender: "male" | "female";
  age: number;
}) {
  return (
    <Tag color="#FF4E4E">
      <div className="w-full flex items-center gap-x-0.5">
        {gender === "male" ? (
          <Image
            src="/svg/male.svg"
            alt=""
            width={200}
            height={300}
            className="w-full h-full"
          ></Image>
        ) : (
          <Image
            src="/svg/female.svg"
            alt=""
            width={200}
            height={300}
            className="w-full h-full"
          ></Image>
        )}
        {age}
      </div>
    </Tag>
  );
}
