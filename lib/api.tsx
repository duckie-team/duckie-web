import axios from "axios";
import {ApiClient} from "./client/client";

export const api = new ApiClient({
    baseUrl: process.env.NEXT_PUBLIC_API_SERVER || "",
    auth:
        typeof window === "undefined"
            ? ""
            : localStorage.getItem("accessToken") || "",
    defaultHeaders: {
        // "x-duckie-device-name": navigator.userAgent,
        "x-duckie-device-name": "web",
        "x-duckie-version": "1.0.0",
        "x-duckie-client": "web"
    },
});