import { API_HOST } from "@/utils/constants";
import { useState } from "react";

import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

export interface WSMessage {
	channel: string;
	message: GPTMessage;
}

interface GPTMessage {
	role: "user" | "assistant" | "system";
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

	const { sendMessage, lastMessage, readyState } = useWebSocket(
		`ws://${API_HOST}/chat`,
		{
			onOpen: () => {
				// let uuid = sessionStorage.getItem("uuid");
				// if (uuid) {
				//   sendMessage(uuid);
				// } else {
				//
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
					case "ChatAgent":
						console.log(message_type);
						console.log(
							"token",
							sessionStorage.getItem("session"),
							JSON.parse(sessionStorage.getItem("session") ?? "{}"),
						);
						sendMessage(
							JSON.stringify({
								message_type,
								message_content: JSON.parse(
									sessionStorage.getItem("session") ?? "{}",
								).token,
							}),
						);
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
		const messageObject: WSMessage = {
			channel: uuid,
			message: {
				role: message_type === "ChatAgent" ? "assistant" : "user",
				content: newMessage,
			},
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
	};
}
