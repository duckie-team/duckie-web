import {UserObject} from "./user.object";
import {ExamTypeObject} from "./exam.type.object";

export type ExamObject = {
    id: number;
    title: string;
    thumbnailUrl: string;
    solvedCount: number;
    user: Pick<UserObject, "id" | "nickName">;
    description: string | null;
    type: ExamTypeObject;
    buttonTitle: string;
};