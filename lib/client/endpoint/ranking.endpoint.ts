/**
 * 유저 랭킹
 */
import { UserObject } from "../object/user.object";
import { Endpoint } from "./index";
import { GetUserParameter, GetUserResponse } from "./user.endpoint";
import { ExamObject } from "../object/exam.object";

export type GetRankingUserParameter = {
  page: number
}

export type GetRankingUserResponse = {
  users: UserObject[]
}

export const GetRankingUsers: Endpoint<GetRankingUserParameter, GetRankingUserResponse> = {
  method: 'get',
  path: '/ranking/users',
  queryParams: ['page']
}


/**
 * 시험 랭킹
 */

export type GetRankingExamParameter = {
  page: number
  order: string
}

export type GetRankingExamResponse = {
  exams: ExamObject[],
  page: number,
}

export enum ExamRankingOrder {
  AnswerRate = "answer_rate",
  SolveCount = "solve_count",
}

export const GetRankingExams: Endpoint<GetRankingExamParameter, GetRankingExamResponse> = {
  method: 'get',
  path: '/ranking/exams',
  queryParams: ['order', 'page']
}