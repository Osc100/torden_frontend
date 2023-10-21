// export const isProduction = process.env.IS_PRODUCTION !== undefined;
export const isProduction = true;

export const PROTOCOL = isProduction ? "https" : "http";
export const WS_PROTOCOL = isProduction ? "wss" : "ws";

export const API_HOST = "api.torden.services" ?? "localhost:4000";
export const API_URL = `${PROTOCOL}://${API_HOST}`;
