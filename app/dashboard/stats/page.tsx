export default function Dashboard() {
	return (
		<div className="h-full flex items-center justify-center bg-gradient-to-b from-[#03577E] to-[#45ACAF] mx-36 rounded-2xl shadow-xl mt-20 mb-20">
			test
		</div>
	);
}

interface CuadroEstadisticaProps {
	nombre: string;
	mes: string;
	año: string;
	semana: string;
}

function CuadroEstadistica(props: CuadroEstadisticaProps) {
	return (
		<div className="h-32 w-32 ">
			Nombre={props.nombre}
			Mes={props.mes}
			<div>
				Año={props.año}
				semana={props.semana}
			</div>
		</div>
	);
}
