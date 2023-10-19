"use client";

import useChat from "@/hooks/useChat";
import { FC } from "react";
import Chat from "./Chat";



 
const HomeChat: FC = () => {
  const chatProps = useChat({ message_type: "NewUUID" });
  
  return <Chat title="Preguntanos lo que quieras" {...chatProps} showSuggestedQuestions />;
}
 
export default HomeChat;