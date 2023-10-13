import { type } from "os";
import { FiLock, FiMail } from "react-icons/fi";
import { IconType } from "react-icons";
import LoginInput from "@/components/LoginInput";

export default function Login() {
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
				<div className=" grid grid-cols-2 gap-x-6 px-[5%] ">
					<LoginInput type="text" placeholder="Nombre" Icon={FiMail} />

					<LoginInput type="text" placeholder="Apellido" Icon={FiMail} />

					<LoginInput type="text" placeholder="Rol" Icon={FiMail} />
					<LoginInput type="text" placeholder="Compañía" Icon={FiMail} />
					<LoginInput
						type="email"
						placeholder="Correo electronico"
						Icon={FiMail}
					/>
					<LoginInput type="password" placeholder="Contraseña" Icon={FiMail} />

					{/* <label className="inline-flex items-center ">
          <input
            type="checkbox"
            className="form-checkbox bg-[#76B7C0]  h-8 w-8 mb-10"
          />
          <span className="ml-4 mb-10 text-white text-2xl">
            Recuérdame
          </span>
        </label> */}
				</div>
				<a
					href="/registro"
					className=" mx-16 text-xl font-bold bg-white rounded-xl  text-[#1D3556] py-1 flex items-center text-center justify-center h-14 w-[60%] shadow-xl hover:bg-secundario transition-colors duration-500 mt-10"
				>
					<button type="button">Registrarse</button>
				</a>
			</div>
		</div>
	);
}
