import Chat from "@/components/Chat";
import { FC } from "react";

const DashboardChatPage: FC = () => {
	return (
		<div className="h-full flex items-center justify-center">
			<div className="w-full">
				<Chat title="Chat 1" messageType="ChatAgent" />
			</div>
		</div>
	);
};

export default DashboardChatPage;
