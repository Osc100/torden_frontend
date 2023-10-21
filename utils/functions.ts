import { API_URL } from "./constants";

const headers = {
	"Content-Type": "application/json",
} as const;

function getAuthHeader() {
	const token = JSON.parse(sessionStorage.getItem("session") ?? "{}").token;

	console.log("HeaderToken", token);

	if (token) {
		return {
			...headers,
			Authorization: `Bearer ${token}`,
		};
	}

	return {};
}

export function postRequest(relativeUrl: string, body: BodyInit) {
	return fetch(`${API_URL}/${relativeUrl}`, {
		method: "POST",
		headers: {
			...headers,
			...getAuthHeader(),
		},
		body,
	});
}

export function getRequest(relativeUrl: string) {
	return fetch(`${API_URL}/${relativeUrl}`, {
		method: "GET",
		headers: {
			...headers,
			...getAuthHeader(),
		},
	});
}

export interface PublicAccountData {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	//role: AccountRole;
	company_id: number;
	created: string;
	exp: number;
}
