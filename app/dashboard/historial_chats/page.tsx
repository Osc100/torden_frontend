"use client";

import { getRequest } from "@/utils/functions";
import { useEffect, useState } from "react";

interface Chat {
	id: string;
	created: string;
	company_id: number;
	ai_description?: string | null;
	client_name?: string | null;
	account_id?: string | null | string[];
}

interface Company {
	id: number;
	name: string;
}

interface DBUser {
	id: number;
	first_name: string;
	last_name: string;
	company_id: number;
}

export default function HistorialChatPage() {
	const [chats, setChats] = useState<Chat[]>([]);

	const [companies, setCompanies] = useState<Company[]>([]);

	const [acc, setAcc] = useState<string>();

	const newChats: Record<number, Chat> = {};

	useEffect(() => {
		getRequest("history").then((response) => {
			response.json().then((data) => {
				setChats(data.slice().reverse());
			});
		});

		getRequest("companies").then((response) => {
			response.json().then((data) => {
				setCompanies(data);
			});
		});

		const session = JSON.parse(localStorage.getItem("session") ?? "{}");

		if (session) {
			setAcc(`${session.first_name} ${session.last_name}`);
		}

		// getRequest("agents").then((response) => {
		// 	response.json().then((data) => {
		// 		setAgents(data);
		// 	});
		// });
	}, []);

	return (
		<div className=" ">
			<div className="text-2xl shadow-2xl font-semibold h-14 mx-32  bg-primario flex justify-center items-center rounded-full my-10">
				<h1 className="shadow-sm text-white hover:text-[#45ACAF] transition-colors duration-500 ">
					HISTORIAL DE CHATS
				</h1>
			</div>
			<div className=" overflow-auto px-10">
				<table className=" bg-slate-50 rounded-xl overflow-auto w-full shadow-xl sticky ">
					<thead>
						<tr className="text-xl h-10 text-white bg-primario ">
							<th className="border border-white">ID</th>
							<th className="border border-white">COMPAÑIA</th>
							<th className="border border-white">AGENTES</th>
							<th className="border border-white">CLIENTE</th>
							<th className="border border-white">DESCRIPCIÓN</th>
							<th className="border border-white">FECHA</th>
						</tr>
					</thead>
					<tbody className="overflow-auto">
						{chats.map((chat, index) => {
							return (
								<FilaDatos
									key={`chat row ${index}`}
									id={chat.id}
									compañia={
										companies.find((company) => company.id === chat.company_id)
											?.name ?? "Torden"
									}
									nombreAgente={acc ?? "Test"}
									nombreCliente={
										companies.find((company) => company.id === chat.company_id)
											?.name ?? "Not found"
									}
									descripcion={chat.ai_description ?? "Not yet generated"}
									fecha={new Date(chat.created)}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
interface DatosTabla {
	id: string;
	compañia: string;
	nombreAgente: string;
	nombreCliente: string;
	descripcion: string;
	fecha: Date;
}

function FilaDatos(props: DatosTabla) {
	return (
		<tr className="text-xl text-black h-10 overflow-auto">
			<td className="border border-blue-400 pl-5 ">
				<a
					href={`/dashboard/historial_chats/${props.id}`}
					className="text-blue-500 w-full"
				>
					{props.id}
				</a>
			</td>
			<td className="border border-blue-400 pl-5">{props.compañia}</td>
			<td className="border border-blue-400 pl-5">{props.nombreAgente}</td>
			<td className="border border-blue-400 pl-5">{props.nombreCliente}</td>
			<td className="border border-blue-400 pl-5">{props.descripcion}</td>

			<td className="border border-blue-400 pl-5">
				{props.fecha.toLocaleDateString()}
			</td>
		</tr>
	);
}
