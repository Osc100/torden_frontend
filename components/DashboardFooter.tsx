import { FC } from "react";
import { PiPlayCircleLight } from "react-icons/pi";

const DashboardFooter: FC = () => {
	return (
		<footer className="bg-[#63A8B5] text-6xl text-white flex justify-between items-center h-20 px-6">
			<div className="flex items-center gap-3  bg-white text-black px-5 rounded-lg overflow-hidden h-[80%] ">
				<p className="text-2xl font-semibold leading-2">OTROS AGENTES</p>
				<img src="/user.svg" alt="user" className="mb-2 h-24" />
			</div>

			<PiPlayCircleLight />
		</footer>
	);
};

export default DashboardFooter;
