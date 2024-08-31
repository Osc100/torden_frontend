import HomeChat from "@/components/HomeChat";

export default function Home() {
	return (
		<div>
			<nav className="h-24 bg-slate-100 hidden sm:flex justify-between fixed w-full z-10">
				<div>
					<img
						src="logoTorden.png"
						alt="Logo de Torden"
						className="h-20 my-3"
					/>
				</div>
				<div>
					<BotonNavBar texto="Inicio" href="#inicio" />
					<BotonNavBar texto="Que somos" href="#que_somos" />
					<BotonNavBar texto="Nosotros" href="#nosotros" />
					<BotonNavBar texto="Iniciar sesión" href="/login" />
				</div>
			</nav>
			<div
				id="inicio"
				className="pt-4 sm:pt-24 flex justify-center w-full bg-gradient-to-b from-[#45ACAF] via-white to-[#45ACAF] px-4 xl:px-[12%] "
			>
				<div>
					<h1 className="text-3xl md:text-5xl font-extrabold text-white flex text-center justify-center pt-10">
						Puedes preguntar de nuestro servicio a nuestra IA
					</h1>
					<p className="text-2xl text-white flex justify-center mx-4 xl:mx-20  py-10 px-2 md:px-10 text-justify md:text-center font-semibold">
						¡Bienvenidos a nuestro mundo de innovación y automatización del
						servicio al cliente! <br />
						En nuestra empresa, nos apasiona llevar la atención al cliente a un
						nuevo nivel utilizando la poderosa tecnología del modelo de lenguaje
						natural GPT-3.5 de OpenAI.
					</p>

					<HomeChat />
					<div className="grid md:grid-cols-2 mx-5 md:mx-0 items-center py-24 xl:py-24">
						<img
							src="hombre_computadora.png"
							alt="Hombre en escritorio"
							className=" "
						/>
						<div>
							<h2 className="text-4xl font-bold text-black pt-6 md:pt-0">
								FUNCIONAMIENTO
							</h2>
							<ul className="text-2xl text-left list-disc">
								<li>Cliente se comunica con su empresa mediante Torden.</li>
								<li>Un agente activo de su empresa recibe el mensaje.</li>
								<li>
									Automaticamente se comienza a generar una respuesta y se envia
									si es común.
								</li>
								<li>
									Si no es común se le pedirá al agente revisar antes de enviar.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div
				id="que_somos"
				className="bg-[#EBFEFF] pt-10 flex justify-center px-[12%]"
			>
				<div>
					<h2 className="text-5xl font-bold text-center text-[#03577B] ">
						¿QUÉ SOMOS?
					</h2>
					<p className="text-2xl text-justify  pt-8 mb-10 text-black ">
						Somos una plataforma profesional de automatización del servicio al
						cliente que utiliza un avanzado modelo de lenguaje natural para
						brindar respuestas precisas y eficientes a cualquier consulta de los
						clientes. <br /> <br /> Nuestra plataforma permite a los agentes de
						servicio al cliente conectarse y gestionar los chats de manera
						óptima, ya que se balancean automáticamente según la empresa a la
						que pertenezcan. <br /> <br /> Con Torden, tu empresa puede
						aprovechar al máximo las capacidades de automatización y respuesta
						inteligente, proporcionando a tus clientes una experiencia de
						servicio al cliente altamente profesional y eficiente.
					</p>
					<h2
						id="nosotros"
						className="text-5xl font-bold text-center text-[#03577B] mb-10"
					>
						NOSOTROS
					</h2>
					<div className="grid xl:grid-cols-2 mb-20 pt-20 gap-y-14">
						<div className="flex justify-end w-full">
							<AboutBox
								src="Oscar.jpeg"
								rol="Desarrollador"
								nombre="Oscar Marín"
								descripcion="Tech Lead, encargado de tomar las decisiones técnicas, diseñar las arquitecturas y seleccionar las tecnologías que se utilizarán. Es el cerebro del backend, donde crea y desarrolla la lógica detrás de nuestras aplicaciones.

                "
							/>
						</div>

						<div className="flex justify-end w-full">
							<AboutBox
								src="Katherine.jpeg"
								rol="Desarrolladora"
								nombre="Katherine Cundano"
								descripcion="Apasionada del frontend, experta en el diseño de interfaces y la creación de una experiencia de usuario excepcional. Combina habilidades técnicas con una sensibilidad artística para brindar la mejor interacción posible."
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#03577E] h-16 px-[12%] flex justify-between items-center overflow-hidden">
				<div className=" font-bold text-white  ">
					<p>Copyright © 2023 Torden. Todos los derechos reservados.</p>
				</div>
				<div>
					<img
						src="LogoPositivo.png"
						alt="Logo de Torden "
						className="h-24 mt-2 "
					/>
				</div>
			</div>
		</div>
	);
}

interface AboutBoxProps {
	src: string;
	nombre: string;
	rol: string;
	descripcion: string;
}

function AboutBox(props: AboutBoxProps) {
	return (
		<div className="w-full md:w-[70%] ">
			<div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#45ACAF] absolute z-10 -ml-20 -mt-10 shadow-xl ">
				<img
					src={props.src}
					alt={props.rol}
					className="w-32 h-32 md:w-48 md:h-48 rounded-full"
				/>
			</div>
			<div className="w-full h-96 lg:h-80 xl:h-96 2xl:h-80 bg-[#03577B] rounded-md shadow-2xl ">
				<h2 className=" text-center text-3xl text-white mx-3 pt-16 font-semibold">
					{props.rol}
				</h2>

				<p className=" text-center mb-8 text-xl md:text-2xl text-white ">
					{props.nombre}
				</p>
				<p className="text-white text-lg xs:text-xl text-justify mx-5">
					{props.descripcion}
				</p>
			</div>
		</div>
	);
}
interface Botonprops {
	texto: string;
	href: string;
}

function BotonNavBar(props: Botonprops) {
	return (
		<a href={props.href}>
			<button
				type="button"
				className="p-1 sm:p-4 rounded-2xl  hover:bg-[#03577B] hover:text-white shadow-xl xl:mr-6 mt-3 text-xl text-black font-bold  transition-colors duration-500 "
			>
				{props.texto}
			</button>
		</a>
	);
}
