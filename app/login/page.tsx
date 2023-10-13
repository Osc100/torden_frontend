import LoginInput from "@/components/LoginInput";
import { FiLock, FiMail } from "react-icons/fi";
export default function Login() {
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
			<div className="flex flex-col justify-center items-center">
				<div>
					<h1 className="text-4xl text-center text-white font-extrabold drop-shadow-md hover:text-[#1D3556] transition-colors duration-500 mb-24  ">
						Inicio de sesión
					</h1>
				</div>

				<LoginInput
					type="email"
					placeholder="Correo electrónico"
					Icon={FiMail}
				/>
				<LoginInput type="password" placeholder="Contraseña" Icon={FiLock} />

				{/* <label className="inline-flex items-center ">
          <input
            type="checkbox"
            className="form-checkbox bg-[#76B7C0]  h-8 w-8 mb-10"
          />
          <span className="ml-4 mb-10 text-white text-2xl">
            Recuérdame
          </span>
        </label> */}
				<a
					href="/dashboard"
					className=" mx-16 text-xl font-bold text-white rounded-xl  bg-[#1D3556] py-1 flex items-center text-center justify-center h-14 w-[60%] shadow-xl hover:bg-[#03577B] transition-colors duration-500"
				>
					<button type="button">Ingresar</button>
				</a>
			</div>
		</div>
	);
}
