import { API_URL } from "./constants";

const headers = {
	"Content-Type": "application/json",
} as const;

export function postRequest(relativeUrl: string, body: BodyInit) {
	return fetch(`${API_URL}/${relativeUrl}`, {
		method: "POST",
		headers,
		body,
	});
}

export function getRequest(relativeUrl: string) {
	return fetch(`${API_URL}/${relativeUrl}`, {
		method: "GET",
		headers,
	});
}
