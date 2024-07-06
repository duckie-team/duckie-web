import { Endpoint, SimpleResponse } from "./index";
import { UserObject } from "../object/user.object";

/**
 * GET: 유저 정보 가져오기
 */

export type GetUserParameter = {
  id: number
}

export type GetUserResponse = UserObject

export const GetUser: Endpoint<GetUserParameter, GetUserResponse> = {
  method: "get",
  path: (e) => `/users/${e.id}`,
}

/**
 * PATCH : 유저 정보 수정
 */

export type PatchUserParameter = {
  id: number,
  profileImageUrl: string,
  nickName: string,
  status: string,
  introduction: string,
}

export type PatchUserResponse = UserObject

export const PatchUser: Endpoint<
  PatchUserParameter,
  PatchUserResponse
> = {
  method: "patch",
  path: (e) => `/users/${e.id}/submit`,
  pathParams: ['id'],
  bodyParams: ['profileImageUrl', 'nickName', 'status', 'introduction'],
};

/**
 * POST : 닉네임 중복 체크
 */

export type PostUserCheckNickNameParameter = {
  nickName: string,
}

export type PostUserCheckNickNameResponse = SimpleResponse

export const PostUserCheckNickName: Endpoint<
  PostUserCheckNickNameParameter,
  PostUserCheckNickNameResponse
> = {
  method: "post",
  path: (e) => `users/${e.nickName}/duplicate-check`,
  pathParams: ['nickName'],
}