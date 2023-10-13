import { API_HOST } from "@/utils/constants";
import { useState } from "react";

import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

interface GPTMessage {
	role: "user" | "assistant" | "system";
	content: string;
}
export default function useChat() {
	const [inputMessage, setInputMessage] = useState("");
	const [messageHistory, setMessageHistory] = useState<GPTMessage[]>([]);
	const [sendButtonEnabled, setSendButtonEnabled] = useState(true);

	const { sendMessage, lastMessage, readyState } = useWebSocket(
		`ws://${API_HOST}/chat`,
		{
			onOpen: () => {
				// let uuid = sessionStorage.getItem("uuid");
				// if (uuid) {
				//   sendMessage(uuid);
				// } else {
				sendMessage(
					JSON.stringify({
						message_type: "NewUUID",
						message_content: "",
					}),
				);
				console.log("NewUUID");
			},
			onMessage: (e) => {
				console.log(e.data);
				const data: GPTMessage | GPTMessage[] = JSON.parse(e.data);
				if (Array.isArray(data) && data) {
					const newMessages = data as GPTMessage[];
					setMessageHistory((prev) => [...prev, ...newMessages]);
				} else if (data) {
					const newMessage = data as GPTMessage;
					if (newMessage.role === "assistant") {
						setSendButtonEnabled(true);
					}
					setMessageHistory((prev) => [...prev, newMessage]);
				}
			},
		},
	);

	const handleMessageSubmit = (newMessage: string) => {
		if (newMessage) {
			sendMessage(newMessage);
			setInputMessage("");
			setSendButtonEnabled(false);
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
	};
}
