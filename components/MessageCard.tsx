import { GPTMessage } from "@/hooks/useChat";
import { FC } from "react";

interface MessageCardProps {
	author: GPTMessage["role"];
	agent_name?: string;
	content: string;
	is_user_message: boolean;
}

const MessageCard: FC<MessageCardProps> = (props) => {
	return (
		<div
			className={`flex w-full ${
				props.is_user_message ? "justify-end" : "justify-start"
			}`}
		>
			<div className="w-4/5 md:w-3/4">
				<h4
					className={`text-white ${
						props.is_user_message ? "text-right" : "text-left"
					}`}
				>
					{props.author === "user"
						? "Tú"
						: props.author === "agent"
						? props.agent_name
						: "Torden"}
				</h4>
				<p className="shadow-md bg-white rounded-lg px-3 py-5">
					{props.content}
				</p>
			</div>
		</div>
	);
};

export default MessageCard;
