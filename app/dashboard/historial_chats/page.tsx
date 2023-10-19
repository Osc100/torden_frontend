import { date } from "zod";

export default function HistorialChatPage() {
	return (
		<div
			className=" bg-gradient-to-b from-[#03577E] to-[#45ACAF] 
		mx-36 rounded-2xl shadow-xl my-20 h-full"
		>
			<div className="text-2xl shadow-2xl font-semibold h-14 mx-32  bg-slate-50 flex justify-center items-center rounded-full my-10">
				<h1 className="shadow-sm text-primario ">HISTORIAL DE CHATS</h1>
			</div>
			<div className="container px-10">
				<table className=" bg-slate-50 rounded-xl overflow-hidden w-full    shadow-xl ">
					<thead>
						<tr className="text-xl h-10 text-primario  ">
							<th className="border border-blue-400 ">AGENTE</th>
							<th className="border border-blue-400">CLIENTE</th>

							<th className="border border-blue-400">FECHA</th>
						</tr>
					</thead>
					<tbody className="overflow-y-scroll">
						<FilaDatos
							nombreAgente="Julio"
							nombreCliente="Jairo Rodriguez"
							fecha={new Date()}
						/>
						<FilaDatos
							nombreAgente="Andy"
							nombreCliente="Diana Martinez"
							fecha={new Date()}
						/>
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
			<td className="border border-blue-400 pl-5 ">{props.nombreAgente}</td>
			<td className="border border-blue-400 pl-5">{props.nombreCliente}</td>

			<td className="border border-blue-400 pl-5">
				{props.fecha.toLocaleDateString()}
			</td>
		</tr>
	);
}
