import { IconType } from "react-icons";

interface InputProps {
	type: string;
	placeholder: string;
	Icon: IconType;
}
function LoginInput(props: InputProps) {
	return (
		<div
			className="text-white mb-10 border border-white rounded-xl flex px-2 mx-2 items-center py-1 
        text-2xl h-14  shadow-2xl "
		>
			<props.Icon />
			<input
				className="   bg-[#1D3556] placeholder-white ml-1 focus:outline-none min-w-0"
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
}
export default LoginInput;
