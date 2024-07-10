import Image from "next/image";
import React from "react";

export default function HomeItemCard() {
  return (
    <div className="h-80 w-60">
      <Image
        src="/img/t-role.png"
        alt=""
        width={200}
        height={300}
        className="w-full h-[80%]"
      ></Image>
    </div>
  );
}
