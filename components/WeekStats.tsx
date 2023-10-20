interface SemanalEstadisticasProps {
	nombreCuadro: string;
	mes: string;
	año: string;
}

function WeekStats(props: SemanalEstadisticasProps) {
	return (
		<div>
			<div className="flex flex-col justify-center ">
				<div className="text-2xl shadow-2xl font-semibold h-14 mx-32  bg-primario text-primario flex  justify-center items-center rounded-full my-8">
					{props.nombreCuadro} - {props.mes} - {props.año}
				</div>
			</div>
		</div>
	);
}

export default WeekStats;
