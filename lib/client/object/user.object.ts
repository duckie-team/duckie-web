export type UserObject = {
  id: number;
  nickName: string;
  profileImageUrl: string;
  email: string;
  status: UserStatus;
};

export enum UserStatus {
  NEW = "NEW",
  READY = "READY",
  BANNED = "BANNED",
  SIGN_OUT = "SIGN_OUT"
}