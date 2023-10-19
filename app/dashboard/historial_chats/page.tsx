"use client";

import { getRequest } from "@/utils/functions";
import { useEffect, useState } from "react";

interface Chat {
	id: string;
	created: string;
	company_id: number;
	// agents?: string[] | null; // Uncomment and import GPTMessage if needed
	ai_description?: string | null;
	client_name?: string | null;
}

export default function HistorialChatPage() {
	const [chats, setChats] = useState<Chat[]>([]);

	useEffect(() => {
		getRequest("history").then((response) => {
			response.json().then((data) => {
				setChats(data.slice().reverse());
			});
		});
	}, []);

	return (
		<div
			className=" bg-gradient-to-b from-[#03577E] to-[#45ACAF] 
		mx-36 rounded-2xl shadow-xl my-20 h-full"
		>
			<div className="text-2xl shadow-2xl font-semibold h-14 mx-32  bg-slate-50 flex justify-center items-center rounded-full my-10">
				<h1 className="shadow-sm text-primario ">HISTORIAL DE CHATS</h1>
			</div>
			<div className="container px-10">
				<table className=" bg-slate-50 rounded-xl overflow-y-scroll w-full shadow-xl ">
					<thead>
						<tr className="text-xl h-10 text-primario  ">
							<th className="border border-blue-400 ">ID</th>
							<th className="border border-blue-400">COMPAÑÍA</th>

							<th className="border border-blue-400">FECHA</th>
						</tr>
					</thead>
					<tbody className="overflow-y-scroll">
						{chats.map((chat, index) => (
							<FilaDatos
								key={`chat row ${index}`}
								nombreAgente={chat.id}
								nombreCliente={
									chat.company_id === 1 ? "Torden" : chat.company_id.toString()
								}
								fecha={new Date(chat.created)}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
interface DatosTabla {
	nombreAgente: string;
	nombreCliente: string;

	fecha: Date;
}

function FilaDatos(props: DatosTabla) {
	return (
		<tr className="text-xl text-black h-10">
			<td className="border border-blue-400 pl-5 ">
				<a
					href={`/dashboard/historial_chats/${props.nombreAgente}`}
					className="text-blue-500 w-full"
				>
					{props.nombreAgente}
				</a>
			</td>
			<td className="border border-blue-400 pl-5">{props.nombreCliente}</td>

			<td className="border border-blue-400 pl-5">
				{props.fecha.toLocaleDateString()}
			</td>
		</tr>
	);
}
