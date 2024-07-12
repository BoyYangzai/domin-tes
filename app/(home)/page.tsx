import Image from "next/image";
import HomeItemCard from "../../components/home/HomeItemCard";

export default function Home() {
  return (
    <div className="bg-bg flex h-full flex-col items-center overflow-auto">
      <Image
        src="/img/slider.png"
        alt=""
        width={200}
        height={300}
        className="w-[90%] h-80 mb-6"
      ></Image>
      <div className="w-full flex justify-center items-center">
        <div className="w-[92%] flex flex-wrap justify-between gap-x-2 gap-y-5">
          <HomeItemCard></HomeItemCard>
          <HomeItemCard></HomeItemCard>
          <HomeItemCard></HomeItemCard>
          <HomeItemCard></HomeItemCard>
          <HomeItemCard></HomeItemCard>
          <HomeItemCard></HomeItemCard>
          <HomeItemCard></HomeItemCard>
          <HomeItemCard></HomeItemCard>
          <HomeItemCard></HomeItemCard>
          <HomeItemCard></HomeItemCard>
          <HomeItemCard></HomeItemCard>
        </div>
      </div>
    </div>
  );
}
