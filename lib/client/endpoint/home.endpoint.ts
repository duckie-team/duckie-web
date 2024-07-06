import {Endpoint} from "./index";
import {RecommendationObject} from "../object/recommendation.object";
import {ExamObject} from "../object/exam.object";

export type GetRecommendationsParameter = {
    page: number;
};
export type GetRecommendationsResponse = {
    recommendations: RecommendationObject[];
    page: number;
    jumbotrons?: ExamObject[];
};

export const GetRecommendations: Endpoint<GetRecommendationsParameter, GetRecommendationsResponse> = {
    method: "get",
    path: "/recommendations",
    queryParams: ["page"],
};