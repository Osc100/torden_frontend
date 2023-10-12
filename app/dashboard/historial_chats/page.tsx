export default function HistorialChatPage() {
	return (
		<div className="h-full flex  justify-center bg-gradient-to-b from-[#03577E] to-[#45ACAF] mx-36 rounded-2xl shadow-xl mt-20 mb-20">
			<table className="min-w-full ">
				<thead>
					<tr className="text-2xl font-semibold h-10">
						<th className="border ">Agente</th>
						<th className="border">Cliente</th>
						<th className="border">Descripción</th>
						<th className="border">Fecha</th>
					</tr>
				</thead>
			</table>
		</div>
	);
}
