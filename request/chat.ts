import { request } from "./request";
type ClassStatus = "ready" | "locked";

interface Class {
  name: string;
  external_id: string;
  description: string;
  status: ClassStatus;
  internal_id: number;
}

interface Program {
  percentage: number;
  completed_class: number;
  next_class_id: number;
  next_class_name: string;
  next_class_external_id: string;
  total_classes: number;
  classes: Class[];
  name: string;
  external_id: string;
  description: string;
  internal_id: number;
}

// https://test.getolivia.org/api/chat/stream
export async function getPrograms() {
  return await request<{
    data: {
      programs: Program[];
    };
  }>({
    url: "/programs",
    method: "GET",
  });
}

export function getGreeting(aiRoleId: number) {
  console.log("create chat");
  return request<{
    temUid: string;
    conversationId: string;
    greeting: string;
    code: number;
    message: string;
  }>({
    method: "POST",
    url: "/chat/createChat",
    data: {
      aiRoleId,
    },
  }).then((res) => {
    return res;
  });
}


export async function sendChatMessage(data: {
  message: string;
  dialogue_id?: string;
  classId?: string;
}) {
  return await request<{
    data: {
      messages: string[];
    };
  }>({
    url: data.classId ? `/class/${data.classId}/chat` : "/chat",
    method: "POST",
    data: {
      text: data.message,
      dialogue_id: data.dialogue_id,
    },
  });
}
