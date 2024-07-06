import {ApiClient} from "./client/client";
import { getCookie } from "cookies-next";

export const api = new ApiClient({
    baseUrl: process.env.NEXT_PUBLIC_API_SERVER || "",
    auth:
        typeof window === "undefined"
            ? ""
            : getCookie("accessToken") || "",
    defaultHeaders: {
        // "x-duckie-device-name": navigator.userAgent,
        "x-duckie-device-name": "web",
        "x-duckie-version": "1.0.0",
        "x-duckie-client": "web",
        "Content-Type": "application/json"
    },
});