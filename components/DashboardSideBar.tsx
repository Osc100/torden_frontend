import { FC } from "react";
import {
	FaChartLine,
	FaGears,
	FaHouse,
	FaMessage,
	FaPaperclip,
	FaRightFromBracket,
} from "react-icons/fa6";
import UserProfile from "./UserProfile";

import { IconType } from "react-icons";

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

const DashboardSideBar: FC = () => {
	return (
		<aside className="w-[20%] flex flex-col items-center bg-white h-screen">
			<img src="/logoTorden.png" alt="Logo de Torden" className="h-24 mt-5 " />

			<UserProfile src="/Kelly.jpeg" name="Kelly Roxell" role="Agente" />

			<div className="mt-24" />

			<DashboardItem name="Home" Icon={FaHouse} />
			<DashboardItem name="Chats" Icon={FaMessage} active />
			<DashboardItem name="Estadísticas" Icon={FaChartLine} />
			<DashboardItem name="Historial de chats" Icon={FaPaperclip} />
			<DashboardItem name="Configuración" Icon={FaGears} />

			<div className="flex-grow" />

			<DashboardItem name="Cerrar Sesión" Icon={FaRightFromBracket} />
			<div className="mb-2" />
		</aside>
	);
};

export default DashboardSideBar;
