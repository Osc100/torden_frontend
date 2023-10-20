"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { IconType } from "react-icons";
import {
	FaChartLine,
	FaMessage,
	FaPaperclip,
	FaRightFromBracket,
	FaUsers
} from "react-icons/fa6";
import UserProfile from "./UserProfile";

interface DashboardItemProps {
	name: string;
	Icon: IconType;
	href: string;
}

const DashboardItem: FC<DashboardItemProps> = (props) => {
	const pathname = usePathname();
	const isActive = pathname === props.href;
	return (
		<button
			type="button"
			className={`mt-3 text-lg flex rounded-md items-center w-[80%] transition-colors hover:bg-[#63A8B5] hover:text-white ${
				isActive ? "text-white bg-[#63A8B5]" : "text-black"
			}`}
		>
			<Link className="p-4 flex items-center w-full" href={props.href}>
				<props.Icon />
				<span className="ml-4">{props.name}</span>
			</Link>
		</button>
	);
};

const DashboardSideBar: FC = () => {
	return (
		<aside className="w-[20%] flex flex-col items-center bg-white h-screen">
			<img src="/logoTorden.png" alt="Logo de Torden" className="h-24 mt-5 " />

			<UserProfile
				src="/Katherine.jpeg"
				name="Katherine Cundano"
				role="Agente"
			/>

			<div className="mt-24" />

			{/* <DashboardItem name="Home" Icon={FaHouse} href={"/dashboard"} /> */}
			<DashboardItem name="Chats" Icon={FaMessage} href={"/dashboard/chats"} />
			<DashboardItem
				name="Estadísticas"
				Icon={FaChartLine}
				href={"/dashboard/stats"}
			/>
			<DashboardItem
				name="Historial de chats"
				Icon={FaPaperclip}
				href="/dashboard/historial_chats"
			/>
			<DashboardItem
				name="Registrar usuarios"
				Icon={FaUsers}
				href="/dashboard/registro"
			/>

			<div className="flex-grow" />

			<DashboardItem name="Cerrar Sesión" Icon={FaRightFromBracket} href="#" />
			<div className="mb-2" />
		</aside>
	);
};

export default DashboardSideBar;
