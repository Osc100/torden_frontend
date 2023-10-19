import WeekBarChart from "@/components/WeekBarCharts";
import WeekStats from "@/components/WeekStats";

export default function Stats() {
	return (
		<div>
			<div>
				<WeekStats
					nombreCuadro="Chats supervisados "
					mes="Febrero"
					año="2023"
				/>
			</div>
			<div className="h-full p-8 grid grid-cols-2 grid-rows-2 gap-10">
				<EstadisticaSemanal semana="02 al 08" numero="Semana 1" />
				<EstadisticaSemanal semana="09 al 15" numero="Semana 2" />
				<EstadisticaSemanal semana="16 al 22" numero="Semana 3" />
				<EstadisticaSemanal semana="23 al 31" numero="Semana 4" />
			</div>
		</div>
	);
}
interface EstadisticaSemanalProps {
	semana: string;
	numero: string;
}

function EstadisticaSemanal(props: EstadisticaSemanalProps) {
	return (
		<div>
			<div className="h-full w-full shadow-2xl text-xl bg-slate-100 rounded-lg pt-5 ">
				<div className="flex flex-col  px-5 w-1/2 mx-auto font-medium">
					<div className=" text-white bg-secundario flex justify-center items-center rounded-xl  shadow-xl ">
						{" "}
						{props.numero}
					</div>
					<div className=" text-white bg-secundario flex justify-center items-center rounded-xl my-5 shadow-xl ">
						{props.semana}
					</div>
				</div>
				<WeekBarChart />
			</div>
		</div>
	);
}
