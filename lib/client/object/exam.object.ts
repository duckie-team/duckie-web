import {UserObject} from "./user.object";
import {ExamTypeObject} from "./exam.type.object";
import { TagObject } from "./tag.object";

export type ExamObject = {
    id: number;
    title: string;
    thumbnailUrl: string;
    heartCount: number;
    solvedCount: number;
    user: Pick<UserObject, "id" | "nickName" | "profileImageUrl">;
    description: string | null;
    type: ExamTypeObject;
    buttonTitle: string;
    mainTag?: TagObject;
    totalProblemCount?: number
};