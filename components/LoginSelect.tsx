"use client";

import React from "react";
import { IconType } from "react-icons";

interface LoginInputProps extends React.HTMLProps<HTMLSelectElement> {
	Icon: IconType;
	errorMessage?: string;
}
const LoginInput = React.forwardRef<HTMLSelectElement, LoginInputProps>(
	(props, ref) => {
		const { Icon, errorMessage, ...rest } = props;

		return (
			<div className="mb-10 ">
				<div
					className="text-white border border-white rounded-xl flex px-2 mx-2 items-center py-1 
        text-2xl h-14  shadow-2xl "
				>
					<Icon />

					<select
						name="cars"
						id="cars"
						className="text-white bg-primario "
						{...rest}
					>
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
				</div>

				{errorMessage && (
					<p className="text-red-500 text-sm text-center">{errorMessage}</p>
				)}
			</div>
		);
	},
);
export default LoginInput;
