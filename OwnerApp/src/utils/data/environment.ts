export type CURRENT_ENVIRONMENT_TYPE = "PRODUCTION" | "DEVELOPMENT" | "TEST";
export const CURRENT_ENVIRONMENT: CURRENT_ENVIRONMENT_TYPE = "PRODUCTION";
export const ENVIRONMENT_FLAG = "environment-flag";

export function getStartUrl() {
  if (process.env.NODE_ENV === "production") {
    const START_URL = "https://aws-minority-business-api.vercel.app/";
    return START_URL;
  } else if (process.env.NODE_ENV === "development") {
    const PORT = "4000";
    const IP_ADDRESS = "192.168.1.165";
    const START_URL = `http://${IP_ADDRESS}:${PORT}`;
    return START_URL;
  } else {
    return "";
  }
}
