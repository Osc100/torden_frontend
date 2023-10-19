"use client";

import Chat from "@/components/Chat";
import useChat, { WSMessage } from "@/hooks/useChat";
import { FC, useEffect, useState } from "react";

interface AgentChatState {
	inputMessage: string;
	messageHistory: WSMessage[];
}

type RecordChatState = Record<string, AgentChatState>;

const DashboardChatPage: FC = () => {
	const [chatRecord, setChatRecord] = useState<RecordChatState>({});

	const { messageHistory, handleMessageSubmit } = useChat({
		message_type: "ChatAgent",
	});

	useEffect(() => {
		const newChatState: RecordChatState = structuredClone(chatRecord);

		const chatStates = Object.values(newChatState);

		for (const chatState of chatStates) {
			chatState.messageHistory = []; // clear all messages but keep the input message
		}

		for (const message of messageHistory) {
			if (newChatState[message.channel]) {
				newChatState[message.channel].messageHistory.push(message);
			} else {
				newChatState[message.channel] = {
					inputMessage: "",
					messageHistory: [message],
				};
			}
		}

		setChatRecord(newChatState);
	}, [messageHistory]);

	return (
		<div className="grid grid-cols-2 overflow-y-scroll p-8 gap-8">
			{Object.entries(chatRecord).map(([channel, chatState], index) => {
				return (
					<Chat
						title={`Chat ${index + 1}`}
						inputMessage={chatState.inputMessage}
						setInputMessage={(message) => {
							setChatRecord((prev) => {
								const newChatState = structuredClone(prev);
								newChatState[channel].inputMessage = message;
								return newChatState;
							});
						}}
						channel={channel}
						key={channel}
						messageHistory={chatState.messageHistory}
						handleMessageSubmit={(message) => {
							handleMessageSubmit(message, channel);
							setChatRecord((prev) => {
								const newChatState = structuredClone(prev);
								newChatState[channel].inputMessage = "";
								return newChatState;
							});
						}}
						sendButtonEnabled
						noMargin
						showAgentControls
					/>
				);
			})}
		</div>
	);
};

export default DashboardChatPage;
