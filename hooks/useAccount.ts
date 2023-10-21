import { PublicAccountData } from "@/utils/functions";
import { useEffect, useState } from "react";

const useAccount = () => {
	const [agent, setAgent] = useState<PublicAccountData | null>(null);

	useEffect(() => {
		const token = JSON.parse(sessionStorage.getItem("session") ?? "{}");

		setAgent(token.account ?? null);
	}, []);

	return agent;
};

export default useAccount;
