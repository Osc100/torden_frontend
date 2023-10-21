import { API_HOST, WS_PROTOCOL } from "@/utils/constants";
import { PublicAccountData } from "@/utils/functions";
import { useState } from "react";

import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

export interface WSMessage {
	channel: string;
	agent_data?: {
		id: number;
		first_name: string;
		last_name: string;
	};
	message: GPTMessage;
}

export interface GPTMessage {
	account_id: number | null;
	role: "user" | "assistant" | "system" | "agent" | "status";
	content: string;
}

export type FirstMessageType = {
	message_type: "NewUUID" | "ExistingUUID" | "ChatAgent";
};

export default function useChat({ message_type }: FirstMessageType) {
	const [inputMessage, setInputMessage] = useState("");
	const [messageHistory, setMessageHistory] = useState<WSMessage[]>([]);
	const [sendButtonEnabled, setSendButtonEnabled] = useState(true);
	const [defaultChannel, setDefaultChannel] = useState<string>("");

	const [agent, setAgent] = useState<PublicAccountData | null>(null);

	const { sendMessage, lastMessage, readyState } = useWebSocket(
		`${WS_PROTOCOL}://${API_HOST}/chat`,
		{
			onOpen: () => {
				switch (message_type) {
					case "NewUUID":
					case "ExistingUUID":
						sendMessage(
							JSON.stringify({
								message_type,
								message_content: "",
							}),
						);
						break;
					case "ChatAgent": {
						const token = JSON.parse(sessionStorage.getItem("session") ?? "{}");

						setAgent(token.account ?? null);

						sendMessage(
							JSON.stringify({
								message_type,
								message_content: JSON.parse(
									sessionStorage.getItem("session") ?? "{}",
								).token,
							}),
						);
						break;
					}
				}
				console.log(message_type);
			},
			onMessage: (e) => {
				console.log(e.data);
				const data: WSMessage | WSMessage[] | { channel: string } = JSON.parse(
					e.data,
				);

				if ("channel" in data && !("message" in data)) {
					setDefaultChannel(data.channel);
				} else if (Array.isArray(data) && data) {
					const newMessages = data as WSMessage[];
					setMessageHistory((prev) => [...prev, ...newMessages]);
				} else if (data) {
					const newMessage = data as WSMessage;
					if (["assistant", "agent"].includes(newMessage.message.role)) {
						setSendButtonEnabled(true);
					}
					setMessageHistory((prev) => [...prev, newMessage]);
				}
			},
		},
	);

	const handleMessageSubmit = (newMessage: string, uuid: string) => {
		console.log("Account data", agent);
		console.log("account id", agent?.id);

		const messageObject: WSMessage = {
			channel: uuid,
			message: {
				account_id: agent?.id ?? null,
				role: message_type === "ChatAgent" ? "agent" : "user",
				content: newMessage,
			},
			agent_data:
				agent !== null
					? {
							id: agent.id,
							first_name: agent.first_name,
							last_name: agent.last_name,
					  }
					: undefined,
		};

		console.log("messageObject", messageObject);

		if (newMessage) {
			sendMessage(JSON.stringify(messageObject));
			setInputMessage("");

			if (message_type !== "ChatAgent") {
				setSendButtonEnabled(false);
			}
		} else {
			alert("Porfavor llena la caja de mensaje");
		}
	};

	return {
		inputMessage,
		setInputMessage,
		messageHistory,
		sendButtonEnabled,
		handleMessageSubmit,
		channel: defaultChannel,
		agent,
	};
}
