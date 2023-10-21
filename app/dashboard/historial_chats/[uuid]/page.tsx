"use client";

import { getRequest } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import MessageCard from "@/components/MessageCard";
import { GPTMessage } from "@/hooks/useChat";

interface DBMessage {
	role: GPTMessage["role"];
	text: string;
	created: string;
	account_id?: number | null;
	first_name?: string | null;
	last_name?: string | null;
}

const ChatVisualization = ({ params }: { params: { uuid: string } }) => {
	const router = useRouter();

	const [messages, setMessages] = useState<DBMessage[]>([]);

	useEffect(() => {
		getRequest(`history/${params.uuid}`).then((response) => {
			response.json().then((data) => {
				setMessages(data);
				console.log("messages", data);
			});
		});
	}, [router]);

	return (
		<div className="m-32 flex flex-col mx-10 overflow-y-scroll">
			{messages.map((currentMessage, index) => (
				<MessageCard
					key={`${index} - message card number}`}
					author={currentMessage.role}
					content={currentMessage.text}
					is_user_message={currentMessage.role === "user"}
					agent_name={
						currentMessage.first_name
							? `${currentMessage.first_name} ${currentMessage.last_name}`
							: undefined
					}
				/>
			))}
		</div>
	);
};

export default ChatVisualization;
