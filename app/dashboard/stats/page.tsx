import MonthBarChart from "@/components/MonthBarChart";
import WeekBarChart from "@/components/WeekBarCharts";
import {
	AiFillCaretLeft,
	AiFillCaretRight,
	AiFillCaretUp,
} from "react-icons/ai";

export default function Dashboard() {
	return (
		<div className="h-full p-8 grid grid-cols-2 grid-rows-2 gap-10">
			<CuadroEstadistica nombre="Chats supervisados" mes="Febrero" año="2023" />
			<CuadroEstadistica
				nombre="Tiempo total conectado"
				mes="Marzo"
				año="2023"
			/>
			<CuadroEstadistica
				nombre="Mensajes totales monitoriados"
				mes="Julio"
				año="2023"
			/>
			<CuadroEstadistica
				nombre="Mensajes totales generados"
				mes="Agosto"
				año="2023"
			/>
		</div>
	);
}

interface CuadroEstadisticaProps {
	nombre: string;
	mes: string;
	año: string;
}

function CuadroEstadistica(props: CuadroEstadisticaProps) {
	return (
		<div className="h-full w-full shadow-2xl text-xl bg-primario rounded-lg ">
			<div className="text-2xl text-white font-medium items-center flex justify-center my-8">
				{props.nombre}
			</div>
			<div>
				<div className="flex justify-center px-3 my-5">
					<button type="button">
						<AiFillCaretLeft className="text-white" />
					</button>

					<a href="/dashboard/stats/weekly/">
						<button
							type="submit"
							className="hover:bg-primario bg-secundario text-white flex justify-center items-center rounded-xl px-5 shadow-xl"
						>
							{props.mes}
						</button>
					</a>

					<button type="button">
						<AiFillCaretRight className="text-white" />
					</button>
				</div>

				<div className="flex justify-center  px-3  pb-5">
					<button type="button">
						<AiFillCaretLeft className="text-white" />
					</button>

					<div className="text-white bg-secundario flex justify-center items-center rounded-xl px-5 shadow-xl ">
						{props.año}
					</div>
					<button type="button">
						<AiFillCaretRight className="text-white" />
					</button>
				</div>
				<div>
					<MonthBarChart />
				</div>
			</div>
		</div>
	);
}
