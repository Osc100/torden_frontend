"use client";

import { WSMessage } from "@/hooks/useChat";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import MessageCard from "./MessageCard";
import WritingMessage from "./WritingMessage";

interface ChatProps {
	title: string;
	showSuggestedQuestions?: boolean;
	inputMessage: string;
	setInputMessage: (message: string) => void;
	messageHistory: WSMessage[];
	handleMessageSubmit: (message: string, channel: string) => void;
	channel: string;
	sendButtonEnabled?: boolean;
	showAgentControls?: boolean;
	noMargin?: boolean;
}

export default function Chat(props: ChatProps) {
	const {
		inputMessage,
		setInputMessage,
		messageHistory,
		handleMessageSubmit,
		sendButtonEnabled,
		channel,
		showAgentControls,
	} = props;

	return (
		<div
			className={`bg-gradient-to-b from-[#03577E] to-[#45ACAF] ${
				props.noMargin ? "" : "xl:mx-36"
			} rounded-2xl shadow-xl flex`}
		>
			<div className="flex-[20] xl:flex-[14] ">
				<h2 className="text-2xl xl:text-3xl font-bold flex justify-center mb-4 pt-10 pb-8 pl-5 text-white">
					{messageHistory.length === 0 && props.showSuggestedQuestions
						? "PREGUNTAS SUGERIDAS"
						: props.title}
				</h2>
				<div className="h-[45vh] flex flex-col-reverse mx-10 overflow-y-scroll">
					{messageHistory.length === 0 && props.showSuggestedQuestions ? (
						<div className="grid md:grid-cols-2 gap-4">
							<Pregunta
								texto="¿Cómo funciona Torden?"
								onClick={() => {
									console.log("¿Cómo funciona Torden?");
									handleMessageSubmit("¿Cómo funciona Torden?", channel);
								}}
								disabled={!sendButtonEnabled}
							/>
							<Pregunta
								texto="¿A quiénes estamos dirigidos?"
								onClick={() =>
									handleMessageSubmit("¿A quiénes estamos dirigidos?", channel)
								}
								disabled={!sendButtonEnabled}
							/>
							<Pregunta
								texto="¿Qué es Torden?"
								onClick={() => handleMessageSubmit("¿Qué es Torden?", channel)}
								disabled={!sendButtonEnabled}
							/>
							<Pregunta
								texto="Me gustaría contactarme con Torden"
								onClick={() =>
									handleMessageSubmit(
										"Me gustaría contactarme con Torden",
										channel,
									)
								}
								disabled={!sendButtonEnabled}
							/>
						</div>
					) : (
						<>
							{messageHistory.at(-1)?.message.role === "user" ? (
								<WritingMessage />
							) : null}
							{messageHistory
								.slice()
								.reverse()
								.map((currentMessage, index) => (
									<MessageCard
										key={`${index} - message card number}`}
										agent_name={`${currentMessage.agent_data?.first_name} ${currentMessage.agent_data?.last_name}`}
										author={currentMessage.message.role}
										content={currentMessage.message.content}
										is_user_message={currentMessage.message.role === "user"}
									/>
								))}
						</>
					)}
				</div>
				<div className=" justify-center">
					<form
						className="flex px-10 p-10"
						onSubmit={(e) => {
							e.preventDefault();
							if (sendButtonEnabled) {
								handleMessageSubmit(inputMessage, channel);
							}
						}}
					>
						<input
							value={inputMessage}
							onChange={(e) => setInputMessage(e.target.value)}
							className="w-full rounded-lg h-16 bg-slate-100 px-4 mr-6 "
							disabled={!sendButtonEnabled}
						/>

						<button
							type="submit"
							className="bg-[#03577E] rounded-full  shadow-md mb-10 -ml-3"
						>
							<img src="/send.svg" alt="Enviar" className="ml-[-0.35rem]" />
						</button>
					</form>
				</div>
			</div>

			{showAgentControls && (
				<div className="flex-1 flex flex-col">
					<button type="button" className="">
						<AiOutlineCloseSquare className="my-8 text-4xl text-white shadow-sm" />
					</button>
					<button type="button" className="">
						<GoPeople className="text-4xl text-white shadow-sm" />
					</button>
					<div className="flex-grow" />
					<button
						className="bg-[#03577E] rounded-full w-16 h-16 shadow-md mb-10 -ml-3"
						type="submit"
						onClick={
							sendButtonEnabled
								? () => handleMessageSubmit(inputMessage, channel)
								: () => {}
						}
						disabled={!sendButtonEnabled}
					>
						<img src="/send.svg" alt="Enviar" className="ml-[-0.35rem]" />
					</button>
				</div>
			)}
		</div>
	);
}

function Pregunta(props: {
	texto: string;
	onClick: () => void;
	disabled?: boolean;
}) {
	return (
		<button
			className="rounded-lg bg-slate-100 py-4 shadow-md hover:opacity-80 text-xl"
			onClick={props.onClick}
			type="button"
			disabled={props.disabled}
		>
			<p>{props.texto}</p>{" "}
		</button>
	);
}
