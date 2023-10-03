export default function Home() {
  return (
    <div>
      <div className="flex justify-center w-full bg-gradient-to-b from-[#45ACAF] via-white to-[#45ACAF] px-[12%]">
        <div>
          {" "}
          <h1 className="text-5xl font-extrabold text-white flex justify-center pt-10">
            Puedes preguntar de nuestro servicio a nuestra IA{" "}
          </h1>
          <p className="text-2xl text-white flex justify-center mx-20 p-10 text-center font-semibold">
            ¡Bienvenidos a nuestro mundo de innovación y automatización del
            servicio al cliente! <br />
            En nuestra empresa, nos apasiona llevar la atención al cliente a un
            nuevo nivel utilizando la poderosa tecnología del modelo de lenguaje
            natural GPT-3.5 de OpenAI.
          </p>
          <Chat />
          <div className="flex">
            <img
              src="hombre_computadora.png"
              alt="Hombre en escritorio"
              className="w-1/2 p-[10%]"
            />
            <div className="w-1/2">
              <h2 className="text-4xl font-bold text-black mt-36 pb-10">
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
      <div className="bg-[#EBFEFF] pt-10 flex justify-center px-[12%]">
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
          <h2 className="text-5xl font-bold text-center text-[#03577B] mb-10">
            NOSOTROS
          </h2>
          <div className="grid grid-cols-4 mb-20 pt-20  ">
            <Cajita src="Agner.jpeg" rol="Diseñador" nombre="Agner Somoza" />
            <p className="text-center">
              Tech Lead, encargado de tomar las decisiones técnicas, diseñar las
              arquitecturas y seleccionar las tecnologías que se utilizarán.
            </p>
            <Cajita src="Kelly.jpeg" rol="Mercadológa" nombre="Kelly Meneses" />
            <p className="text-center">
              Tech Lead, encargado de tomar las decisiones técnicas, diseñar las
              arquitecturas y seleccionar las tecnologías que se utilizarán.
            </p>
            <p className="text-center">
              Tech Lead, encargado de tomar las decisiones técnicas, diseñar las
              arquitecturas y seleccionar las tecnologías que se utilizarán.
            </p>
            <div className="flex justify-end w-full">
              <Cajita
                src="Oscar.jpeg"
                rol="Desarrollador"
                nombre="Oscar Marín"
              />
            </div>
            <p className="text-center">
              Tech Lead, encargado de tomar las decisiones técnicas, diseñar las
              arquitecturas y seleccionar las tecnologías que se utilizarán.
            </p>
            <div className="flex justify-end w-full">
              <Cajita
                src="Katherine.jpeg"
                rol="Desarrolladora"
                nombre="Katherine Cundano"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#03577E] h-16 px-[12%] ">
        <div className="flex pt-5 font-bold text-white  ">
          <p>Copyright © 2023 Torden. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="bg-gradient-to-b from-[#03577E] to-[#45ACAF] mx-36 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold flex justify-center mb-4 pt-10 pb-8 text-white">
        PREGUNTAS SUGERIDAS
      </h2>
      <div className="h-[45vh] flex flex-col-reverse mx-12">
        <div className="grid grid-cols-2 gap-4">
          <Pregunta texto="¿Cómo funciona Torden?" />
          <Pregunta texto="¿A quiénes estamos dirigidos?" />
          <Pregunta texto="Me gustaría contactarme con Torden" />
        </div>
      </div>
      <div className=" justify-center">
        <div className="flex px-10 p-10">
          <input className="w-full rounded-lg mr-5 bg-slate-100"></input>
          <button className="bg-[#03577E] rounded-full w-16 h-16 shadow-md">
            <img src="send.svg" alt="Enviar" className="ml-[-0.35rem]" />
          </button>
        </div>
      </div>
    </div>
  );
}
function Pregunta(props: { texto: string }) {
  return (
    <>
      <button className="rounded-lg bg-slate-100 py-4  shadow-md hover:opacity-80  text-xl">
        <p>{props.texto}</p>{" "}
      </button>
    </>
  );
}
interface CajitaProps {
  src: string;
  nombre: string;
  rol: string;
}

function Cajita(props: CajitaProps) {
  return (
    <div>
      <div className=" w-48 h-48 rounded-full bg-[#45ACAF] absolute z-10 -ml-24 -mt-12 ">
        <img
          src={props.src}
          alt={props.rol}
          className="w-48 h-48 rounded-full"
        />
      </div>
      <div className="w-72 h-72 bg-[#03577B] rounded-md ">
        <h2 className=" ml-24 text-2xl text-white mx-3 pt-16 font-semibold">
          {props.rol}
        </h2>
        <p className=" text-center pt-20 text-xl text-white ">{props.nombre}</p>
      </div>
    </div>
  );
}
