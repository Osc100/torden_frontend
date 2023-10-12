import { FC } from "react";
import { IconType } from "react-icons";
import { PiPlayCircleLight } from "react-icons/pi";

import Chat from "@/components/Chat";
import {
  FaChartLine,
  FaGears,
  FaHouse,
  FaMessage,
  FaPaperclip,
  FaRightFromBracket,
} from "react-icons/fa6";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <main className="flex flex-col w-full h-screen bg-[url('../public/fondo_dashboard.jpg')]">
        <div className="h-full flex items-center justify-center">
          <div className="w-full">
            <Chat title="Chat 1" />
          </div>
        </div>

        <div className="flex-grow" />

        <footer className="bg-[#63A8B5] text-6xl text-white flex justify-between items-center h-20 px-6">
          <div className="flex items-center gap-3  bg-white text-black px-5 rounded-lg overflow-hidden h-[80%] ">
            <p className="text-2xl font-semibold leading-2">OTROS AGENTES</p>
            <img src="user.svg" alt="user" className="mb-2 h-24" />
          </div>

          <PiPlayCircleLight />
        </footer>
      </main>
    </div>
  );
}
