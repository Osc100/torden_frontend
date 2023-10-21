"use client";

import LoginInput from "@/components/LoginInput";
import LoginSelect from "@/components/LoginSelect";
import { postRequest } from "@/utils/functions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AiFillControl, AiFillEdit, AiFillHome } from "react-icons/ai";
import { FiLock, FiMail } from "react-icons/fi";

import { z } from "zod";

const RegisterSchema = z.object({
	first_name: z.string({ required_error: "Requerido" }),
	last_name: z.string({ required_error: "Requerido" }),
	role: z.enum(["agent", "manager", "superuser"], {
		required_error: "Requerido",
		invalid_type_error: "Tipo de usuario inválido",
	}),
	company_id: z.number({ required_error: "Requerido" }).min(1),
	email: z
		.string({ required_error: "Requerido" })
		.email({ message: "Correo electrónico inválido." }),
	password: z
		.string({ required_error: "Requerido" })
		.min(8, { message: "La contraseña debe tener al menos 8 caracteres." }),
});

type RegisterData = z.infer<typeof RegisterSchema>;

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterData>({
		resolver: zodResolver(RegisterSchema),
	});

	const onSubmit = handleSubmit((data) => {
		postRequest("register", JSON.stringify(data)).then((res) => {
			if (res.status === 200) {
				alert(
					"Usuario registrado exitosamente, ya se puede iniciar sesión con el nuevo usuario.",
				);
			} else {
				console.log(res.json().then((data) => {}));
			}
		});
	});

	return (
		<div className="  h-screen  grid grid-cols-2  bg-[#1D3556] px-[2%] py-[5%]">
			<div className=" rounded-xl shadow-2xl bg-[#76B7C0]  flex flex-col gap-2  ">
				<div className="  flex justify-center ">
					<img src="/mujerServicio.png" alt="Mujer en escritorio" />
				</div>
				<div>
					<p className="mt-10 text-center text-2xl font-bold text-white  mx-16">
						Optimiza tu atención al cliente con nosotros
					</p>
					<div />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center">
				<div className=" flex flex-col justify-center items-center">
					<h1 className="text-4xl text-center text-white font-extrabold drop-shadow-md hover:text-[#76B7C0] transition-colors duration-500 mb-20  ">
						Registrar usuario
					</h1>
				</div>
				<form
					onSubmit={onSubmit}
					className=" grid grid-cols-2 gap-x-6 px-[5%] "
				>
					<LoginInput
						{...register("first_name", { required: true })}
						type="text"
						placeholder="Nombre"
						errorMessage={errors.first_name?.message}
						Icon={AiFillEdit}
					/>

					<LoginInput
						type="text"
						{...register("last_name", { required: true })}
						errorMessage={errors.last_name?.message}
						placeholder="Apellido"
						Icon={AiFillEdit}
					/>

					<LoginSelect
						{...register("role", { required: true })}
						type="text"
						placeholder="Rol"
						errorMessage={errors.role?.message}
						Icon={AiFillControl}
					/>
					<LoginSelect
						{...register("company_id", { required: true, valueAsNumber: true })}
						type="number"
						placeholder="Compañía"
						value={1}
						onChange={() => {
							console.log("Not implemented");
						}}
						errorMessage={errors.company_id?.message}
						Icon={AiFillHome}
					/>
					<LoginInput
						{...register("email", { required: true })}
						type="email"
						placeholder="Correo electronico"
						errorMessage={errors.email?.message}
						Icon={FiMail}
					/>
					<LoginInput
						{...register("password", { required: true })}
						type="password"
						errorMessage={errors.password?.message}
						placeholder="Contraseña"
						Icon={FiLock}
					/>

					<button
						className="mx-16 text-xl font-bold bg-white rounded-xl  text-[#1D3556] py-1 flex items-center text-center justify-center h-14 w-[60%] shadow-xl hover:bg-secundario transition-colors duration-500 mt-10"
						type="submit"
					>
						Guardar registro
					</button>
				</form>
			</div>
		</div>
	);
}
