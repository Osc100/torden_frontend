"use client";

import React from "react";
import { IconType } from "react-icons";

interface LoginInputProps extends React.HTMLProps<HTMLInputElement> {
	Icon: IconType;
	errorMessage?: string;
}
const LoginInput = React.forwardRef<HTMLInputElement, LoginInputProps>(
	(props, ref) => {
		const { Icon, errorMessage, ...rest } = props;

		return (
			<div className="mb-10 ">
				<div
					className="text-white border border-white rounded-xl flex px-2 mx-2 items-center py-1 
        text-2xl h-14  shadow-2xl "
				>
					<Icon />
					<input
						ref={ref}
						{...rest}
						className={`bg-transparent placeholder-white ml-1 focus:outline-none min-w-0 ${rest.className}`}
					/>
				</div>

				{errorMessage && (
					<p className="text-red-500 text-sm text-center">{errorMessage}</p>
				)}
			</div>
		);
	},
);
export default LoginInput;
