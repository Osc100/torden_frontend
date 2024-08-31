"use client";

import Chat from "@/components/Chat";
import useChat from "@/hooks/useChat";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsPinFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { LiaClockSolid } from "react-icons/lia";

export default function Dashboard() {
  const chatProps = useChat({ message_type: "NewUUID" });

  return (
    <div>
      <div className="pt-8">
        <Chat
          {...chatProps}
          title="Soporte"
          preguntas={[
            "¿Cómo observo la cantidad de chats que supervisé?",
            "¿Cómo funciona la acción de asignar los chats de forma equitativa?",
            "¿Qué mejoras se harán a futuro en la plataforma?",
            "¿Cómo funciona Torden?",
          ]}
          showSuggestedQuestions={true}
        />
      </div>
      <div className=" grid bg-blue-50 md:grid-cols-2 mx-5 md:mx-0  py-10 xl:py-10">
        <div className="mx-10">
          <div className="text-2xl shadow-2xl font-semibold h-14 mx-32  bg-primario flex justify-center items-center rounded-full my-10">
            <h2 className="shadow-sm text-white hover:text-[#45ACAF] transition-colors duration-500 ">
              ¿CÓMO USAR TORDEN?
            </h2>
          </div>
          <div>
            <div className="text-2xl text-black text-center list-disc mx-16 ">
              <div className="flex items-center">
                <div className="text-2xl text-justify   pt-8 mb-10 ">
                  <div className="flex">
                    <AiOutlineArrowRight className="text-black mr-2 text-4xl" />
                    Torden es una herramienta que facilita los procesos de
                    atención al cliente, mediante una interfaz intuitiva y de
                    fácil acceso
                  </div>
                  <br />
                  <div className="flex">
                    <AiOutlineArrowRight className="text-black mr-2 text-4xl" />
                    Los componentes de la plataforma permite a los agentes de
                    servicio al cliente conectarse y gestionar los chats de
                    manera óptima, ya que se balancean automáticamente según la
                    empresa a la que pertenezcan.
                  </div>
                  <br />
                  <div className="flex">
                    <AiOutlineArrowRight className="text-black mr-2 text-4xl" />
                    Los agentes supervisan los chats e intervienen si es
                    necesario y asi mismo visualizan e interactuan con la
                    plataforma
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl shadow-2xl font-semibold h-14 mx-32  bg-primario flex justify-center items-center rounded-full my-10">
            <h2 className="shadow-sm text-white hover:text-[#45ACAF] transition-colors duration-500 ">
              CHATS RECIENTES
            </h2>
          </div>

          <div>
            <TarjetaChatRecientes
              id={"DFSSDFSDF"}
              compañia={"TORDEN"}
              fecha={new Date()}
            />
            <TarjetaChatRecientes
              id={"12khjm12"}
              compañia={"Wonder"}
              fecha={new Date()}
            />
            <TarjetaChatRecientes
              id={"123jkhb5"}
              compañia={"TechLogi"}
              fecha={new Date()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
interface TarjetaChatRecientesProps {
  id: string;
  compañia: string;
  fecha: Date;
}

function TarjetaChatRecientes(props: TarjetaChatRecientesProps) {
  return (
    <a href={`/dashboard/historial_chats/${props.id}`}>
      <div className="flex justify-center text-center  text-primario  mb-9  ">
        <div className="h-24 w-72 bg-white shadow-xl text-lg font-semibold  rounded-lg hover:bg-secundario transition-colors duration-500 ">
          <div className="flex justify-center items-center text-primario">
            <BsPinFill className="text-lg text-black" />
            <div>{props.id}</div>
          </div>
          <div className="flex justify-center items-center text-primario">
            <FaPeopleGroup className="text-lg text-black" />
            <div className="text-primario">{props.compañia}</div>
          </div>

          <div className="border-t-2 border-gray-500 flex justify-end items-center text-primario">
            <LiaClockSolid className="text-lg text-black" />
            <div>{props.fecha.toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </a>
  );
}
