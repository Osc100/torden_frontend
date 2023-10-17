"use client";

import LoginInput from "@/components/LoginInput";
import { postRequest } from "@/utils/functions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FiLock, FiMail } from "react-icons/fi";

import { z } from "zod";

const loginSchema = z.object({
	email: z
		.string({ required_error: "Requerido" })
		.email({ message: "Correo electrónico inválido." }),
	password: z.string({ required_error: "Requerido" }),
});

type LoginData = z.infer<typeof loginSchema>;

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>({
		resolver: zodResolver(loginSchema),
	});

	const router = useRouter();
	const onSubmit = handleSubmit((data) => {
		postRequest("login", JSON.stringify(data)).then((res) => {
			if (res.status === 200) {
				res.json().then((responseData) => {
					sessionStorage.setItem("session", JSON.stringify(responseData));
					console.log(sessionStorage.getItem("session"));

					router.push("/dashboard");
				});
			} else {
				alert("Usuario o contraseña incorrectos");
			}
		});
	});

	return (
		<div className="  h-screen  grid grid-cols-2  bg-[#76B7C0] px-[12%] py-[5%]">
			<div className=" rounded-xl shadow-2xl bg-[#1D3556]  flex flex-col gap-2  ">
				<div className="  flex justify-center ">
					<img src="login.png" alt="Mujer en escritorio" />
				</div>
				<div>
					<p className="mt-10 text-center text-2xl font-bold text-white  mx-16">
						Optimiza tu atención al cliente con nosotros
					</p>
					<div />
				</div>
			</div>
			<form
				className="flex flex-col justify-center items-center"
				onSubmit={onSubmit}
			>
				<div>
					<h1 className="text-4xl text-center text-white font-extrabold drop-shadow-md hover:text-[#1D3556] transition-colors duration-500 mb-24  ">
						Inicio de sesión
					</h1>
				</div>

				<LoginInput
					{...register("email", { required: true })}
					type="text"
					placeholder="Correo electrónico"
					errorMessage={errors.email?.message}
					className="w-80"
					Icon={FiMail}
				/>
				<LoginInput
					{...register("password", { required: true })}
					type="password"
					className="w-80"
					placeholder="Contraseña"
					errorMessage={errors.password?.message}
					Icon={FiLock}
				/>

				<button
					className=" text-xl font-bold text-white rounded-xl  bg-[#1D3556] py-1 flex items-center text-center justify-center h-14 w-96 shadow-xl hover:bg-[#03577B] transition-colors duration-500"
					type="submit"
				>
					Ingresar
				</button>
			</form>
		</div>
	);
}
