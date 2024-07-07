import { Endpoint, SimpleResponse } from "./index";
import { HeartObject } from "../object/heart.object";

export type PostHeartParameter = {
  examId: number
}

export type PostHeartResponse = {
  heart: HeartObject
}

export const PostHeart: Endpoint<PostHeartParameter, PostHeartResponse> = {
  method: 'post',
  path: '/hearts',
  bodyParams: ['examId']
}


export type DeleteHeartParameter = {
  id: number
}

export type DeleteHeartResponse = SimpleResponse

export const DeleteHeart: Endpoint<DeleteHeartParameter, DeleteHeartResponse> = {
  method: 'delete',
  path: (e) => `hearts/${e.id}`,
  bodyParams: ['id'],
}