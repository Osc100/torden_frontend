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

interface DashboardItemProps {
	name: string;
	Icon: IconType;
	active?: boolean;
}

const DashboardItem: FC<DashboardItemProps> = (props) => {
	return (
		<button
			type="button"
			className={`p-4 mt-3 text-lg flex rounded-md items-center w-[80%] transition-colors hover:bg-[#63A8B5] hover:text-white ${
				props.active ? "text-white bg-[#63A8B5]" : "text-black"
			}`}
		>
			<props.Icon />
			<span className="ml-4">{props.name}</span>
		</button>
	);
};

interface UserProfileProps {
	src: string;
	role: string;
	name: string;
}

const UserProfile: FC<UserProfileProps> = (props) => {
	return (
		<div className="mx-14">
			<img className="rounded-full " src={props.src} alt="profile" />

			<h3 className="text-2xl font-semibold text-center mt-4">{props.name}</h3>

			<p className="text-xl text-center text-gray-800">{props.role}</p>
		</div>
	);
};

export default function Dashboard() {
	return (
		<div className="flex h-screen">
			<aside className="w-[20%] flex flex-col items-center bg-white h-screen">
				<img src="logoTorden.png" alt="Logo de Torden" className="h-24 mt-5 " />

				<UserProfile src="Kelly.jpeg" name="Kelly Roxell" role="Agente" />

				<div className="mt-24" />

				<DashboardItem name="Home" Icon={FaHouse} />
				<DashboardItem name="Chats" Icon={FaMessage} active />
				<DashboardItem name="Estadísticas" Icon={FaChartLine} />
				<DashboardItem name="Reportes" Icon={FaPaperclip} />
				<DashboardItem name="Configuración" Icon={FaGears} />

				<div className="flex-grow" />

				<DashboardItem name="Cerrar Sesión" Icon={FaRightFromBracket} />
				<div className="mb-2" />
			</aside>

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
