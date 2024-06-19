// POST /auth/kakao
import {UserObject} from "../object/user.object";
import {Endpoint} from "./index";

export type PostAuthKakaoParameter = {
    code: string;
};
export type PostAuthKakaoResponse = {
    isNewUser: boolean;
    accessToken: string;
    user: UserObject;
};
export const PostAuthKakao: Endpoint<
    PostAuthKakaoParameter,
    PostAuthKakaoResponse
> = {
    method: "post",
    path: "/auth/kakao",
    bodyParams: ["code"],
};