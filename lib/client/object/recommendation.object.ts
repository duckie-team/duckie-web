import {TagObject} from "./tag.object";
import {ExamObject} from "./exam.object";

export type RecommendationObject = {
    id: number;
    title: string;
    tag: TagObject;
    exams: ExamObject[];
};