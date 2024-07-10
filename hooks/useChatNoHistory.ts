import { useEffect, useMemo, useState } from "react";
import { getGreeting, sendChatMessage } from "../request/chat";
import { useMutation } from "@tanstack/react-query";

export enum ChatType {
  AI,
  USER,
  Loading,
}

export interface ChatItem {
  type: ChatType;
  message?: string | string[];
  options?: string[];
}
const useChat = ({
  roleId,
  stream,
}: {
  roleId: number;
  stream?: boolean;
}) => {
  const [messages, setMessages] = useState<ChatItem[]>([]);

  const lastIemMessage = useMemo(() => {
    return messages?.[messages.length - 1];
  }, [messages]);
  const [dialogue_id, setDialogue_id] = useState<string | undefined>("");
  const { data, mutate } = useMutation({
    mutationKey: ["sendChatMessage"],
    mutationFn: sendChatMessage,
  });


  const sendPrompt = async (text: string) => {
    if (stream) {
      setMessages([
        ...messages,
        {
          type: ChatType.USER,
          message: text,
        },
      ]);
      return;
    }
    setMessages([
      ...messages,
      {
        type: ChatType.USER,
        message: text,
      },
    ]);
    mutate({
      message: text,
      dialogue_id,
    });
  };

  useEffect(() => {
    if (data) {
      setMessages([
        ...messages,
        {
          type: ChatType.AI,
          message: data.data.data.messages,
          options: [
            "Sounds good",
            "How do you feel today?",
            "What does a check-in entail?",
          ],
        },
      ]);
    }
  }, [data]);

  const initChat = async () => {
    const { data } = await getGreeting(0);
    // setDialogue_id(data.data.dialogue_id);
    setMessages([
      {
        type: ChatType.AI,
        // message: data.data.messages,
        options: ["let's start", "Not now", "What does a check-in entail?"],
      },
    ]);
  };

  useEffect(() => {
    initChat();
  }, []);

  return { messages, sendChatMessage: sendPrompt };
};

export default useChat;
