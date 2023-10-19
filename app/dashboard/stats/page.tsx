import {
	AiFillCaretLeft,
	AiFillCaretRight,
	AiFillCaretUp,
} from "react-icons/ai";
export default function Dashboard() {
	return (
		<div className="h-full flex items-center justify-center bg-gradient-to-b from-[#03577E] to-[#45ACAF] mx-36 rounded-2xl shadow-xl mt-20 mb-20">
			<CuadroEstadistica nombre="Chats supervisados" mes="Febrero" año="2023" />
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
		<div>
			<div className="h-96 w-96 shadow-2xl text-xl flex flex-col items-center ">
				<div>
					<AiFillCaretLeft />

					<button
						type="button"
						className="hover:bg-secundario bg-slate-200 flex justify-center items-center rounded-xl px-5"
					>
						{props.mes}
					</button>
					<AiFillCaretRight />
				</div>

				<div>
					<AiFillCaretLeft />

					<div className=" bg-slate-200 flex justify-center items-center rounded-xl px-5">
						{props.año}
					</div>
					<AiFillCaretRight />
				</div>
			</div>
			<div className="text-2xl font-medium items-center flex justify-center">
				{props.nombre}
			</div>
		</div>
	);
}
