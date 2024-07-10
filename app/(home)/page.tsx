import Image from "next/image";
import HomeItemCard from "../../components/home/HomeItemCard";

export default function Home() {
  return <div className="bg-bg h-full flex justify-center items-start flex-wrap">
    <Image src="/img/slider.png" alt="" width={200} height={300} className="w-[90%]"></Image>
    <div>
      <HomeItemCard></HomeItemCard>
    </div>
  </div>;
}
