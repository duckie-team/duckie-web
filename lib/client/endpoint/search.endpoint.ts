import { Endpoint } from "./index";
import { ExamObject } from "../object/exam.object";
import { TagObject } from "../object/tag.object";
import { UserObject } from "../object/user.object";

export type GetSearchParameter = {
  page: number,
  type: SearchType,
  query: string,
}

export type GetSearchResponse = {
  type: SearchType,
  result: SearchResult
}

export type SearchResult = {
  exams ?: ExamObject[]
  tags ?: TagObject[]
  users ?: UserObject[]
}

export enum SearchType {
  EXAMS = "EXAMS",
  USERS = "USERS",
  TAGS = "TAGS",
}

export const GetSearch: Endpoint<GetSearchParameter, GetSearchResponse> = {
  method: 'get',
  path: 'search',
  queryParams: ['page', 'type', 'query']
}