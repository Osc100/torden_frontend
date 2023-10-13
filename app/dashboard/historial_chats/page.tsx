export default function HistorialChatPage() {
	return (
		<div className="h-full flex  justify-center bg-gradient-to-b from-[#03577E] to-[#45ACAF] mx-36 rounded-2xl shadow-xl mt-20 mb-20">
			<table className="min-w-full ">
				<thead>
					<tr className="text-3xl font-semibold h-10">
						<th className="border ">Agente</th>
						<th className="border">Cliente</th>
						<th className="border">Descripción</th>
						<th className="border">Fecha</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-xl text-white">
						<td className="border flex justify-center items-center">Julio</td>
						<td className="border  items-center">Jairo Rodriguez</td>
						<td className="border ">Fallo de wifi</td>
						<td className="border ">07-09-2023</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
