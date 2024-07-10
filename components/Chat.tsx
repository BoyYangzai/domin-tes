"use client";
import { AudioMutedOutlined, LoadingOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Image from "next/image";
import React, {
  Fragment,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import useChat, { ChatType } from "../hooks/useChatNoHistory";

const ITEM_GAP = "mt-6";

export default function Chat({ classId }: { classId: number }) {
  const { messages: data, sendChatMessage } = useChat({
    roleId: classId,
    stream: true,
  });

  const ChatContainerRef = React.useRef<HTMLDivElement>(null);
  const [promptInput, setPromptInput] = useState<string>("");
  const mergedData = useMemo(() => {
    const lastItem = data?.[data.length - 1];
    if (lastItem?.type !== ChatType.AI) {
      return [
        ...data,
        {
          type: ChatType.Loading,
        },
      ];
    }
    return data;
  }, [data]);

  const handleUserPrompt = async (option: string) => {
    await sendChatMessage(option);
  };

  useEffect(() => {
    if (ChatContainerRef.current) {
      ChatContainerRef.current?.scrollTo({
        top: ChatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [ChatContainerRef.current, mergedData]);

  return (
    <div className="w-screen md:w-[48rem] flex justify-center items-start flex-wrap gap-y-6 ">
      <div
        className="w-[90%] h-[40rem] md:h-[34rem]  p-4 border-[1.5px] border-solid border-[#e2e0e0f5] rounded-md overflow-y-scroll bg-white"
        ref={ChatContainerRef}
      >
        {mergedData.map((item, index) => {
          let renderMain: ReactNode = null;
          switch (item.type) {
            case ChatType.AI:
              renderMain = (
                <div className={`${index !== 0 && ITEM_GAP}`}>
                  <AiItem
                    key={index}
                    onSelectOption={handleUserPrompt}
                    data={item as { message: string; options: string[] }}
                  ></AiItem>
                </div>
              );
              break;
            case ChatType.USER:
              renderMain = (
                <div className={`${ITEM_GAP}`}>
                  <UserItem
                    key={index}
                    data={item as { message: string }}
                  ></UserItem>
                </div>
              );
              break;
            case ChatType.Loading:
              renderMain = (
                <div className={`${index !== 0 && ITEM_GAP}`}>
                  <LoadingItem key={index}></LoadingItem>
                </div>
              );
          }
          return <Fragment key={index}>{renderMain}</Fragment>;
        })}
      </div>
      <div className="w-[90%] h-[3.6rem] py-1 border-[1.5px] border-solid border-[#e2e0e0f5] rounded-md flex justify-start items-center gap-y-6">
        <AudioMutedOutlined className="ml-4 text-2xl text-[#3131349d]" />
        <Input
          placeholder="Your thoughts"
          className="border-0 focus-within:border-[transparent] focus-within:shadow-none focus::shadow-none focus:border-[transparent]"
          value={promptInput}
          onChange={(e) => setPromptInput(e.target.value)}
        ></Input>
        <Image
          src="/svg/send.svg"
          alt=""
          width={20}
          height={20}
          className="relative right-6 cursor-pointer"
          onClick={() => {
            handleUserPrompt(promptInput);
            setPromptInput("");
          }}
        ></Image>
      </div>
    </div>
  );
}

const AiItem = ({
  data,
  onSelectOption,
}: {
  data: {
    message: string | string[];
    options: string[];
  };
  onSelectOption: (option: string) => void;
}) => {
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-x-2 justify-center items-center">
          <Image
            src="/img/olivia_avatar.jpeg"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
          <span className="text-lg font-bold flex justify-center items-center">
            Olivia
          </span>
        </div>
        <div className="text-[#9da1b7]">
          17:18
          <div />
        </div>
      </div>
      <div className="w-full flex justify-start md:ml-12">
        <div className="md:max-w-[32rem] p-3 rounded-lg bg-[#f5f1f1f2] mt-1">
          {data.message}
        </div>
      </div>
      {data?.options && !isOptionSelected && (
        <div className="flex justify-start items-center gap-2 flex-wrap mt-4 md:ml-12">
          {data?.options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onSelectOption(option);
                setIsOptionSelected(true);
              }}
              className="p-2 border-2 border-solid border-[#4b6b50f9] rounded-lg flex justify-center items-center cursor-pointer"
            >
              <span className="text-black font-bold">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const UserItem = ({
  data,
}: {
  data: {
    message: string;
  };
}) => {
  return (
    <div className="w-full flex justify-end items-start flex-wrap">
      <div className="w-full flex justify-end items-center gap-x-2">
        <div className="text-[#9da1b7]">17:18</div>
        <span className="text-lg font-bold flex justify-center items-center">
          You
        </span>
        <Image
          src="/img/user_avatar.jpg"
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        ></Image>
      </div>
      <div className="w-full flex justify-end md:mr-12">
        <div className="md:max-w-[34rem] p-3 rounded-lg bg-[#f5f1f1f2] mt-2 flex justify-end">
          {data.message}
        </div>
      </div>
    </div>
  );
};

const LoadingItem = () => {
  return (
    <div className="w-full">
      {/* <div className="w-full flex justify-between items-center">
        <div className="flex gap-x-2 justify-center items-center">
          <Image
            src="/img/olivia_avatar.jpeg"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
          <span className="text-lg font-bold flex justify-center items-center">
            Olivia
          </span>
          <Image
            src="/svg/mute.svg"
            alt=""
            width={10}
            height={10}
            className="w-6 h-6"
          ></Image>
        </div>
        <div className="text-[#9da1b7]">
          17:18
          <div />
        </div>
      </div> */}
      <div className="w-full flex justify-start md:ml-12">
        <div className="w-full md:w-[32rem] p-3 rounded-lg bg-[#f5f1f1f2] mt-2 flex justify-center items-center">
          <LoadingOutlined />
        </div>
      </div>
    </div>
  );
};
