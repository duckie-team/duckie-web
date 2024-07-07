import React from 'react';
import DuckieNavBar from "../../../components/common/DuckieNavBar";
import { api } from "../../../lib/api";
import { ExamRankingOrder } from "../../../lib/client/endpoint/ranking.endpoint";

export async function getRankingUsers() {
  return await api.ranking.getUser({
    page: 1
  })
}

export async function getRankingExams() {
  return await api.ranking.getExam({
    page: 1,
    order: ExamRankingOrder.SolveCount,
  })
}

export default async function Ranking() {
  const users = (await getRankingUsers()).users
  const exams = (await getRankingExams()).exams
  return (
    <>
      <div className="text-white">
        {JSON.stringify(users)}
      </div>
      <div className="text-white">
        {JSON.stringify(exams)}
      </div>
    </>
  );
}