import { DuckPowerObject } from "./duckPower.object";

export type UserObject = {
  id: number;
  nickName: string;
  profileImageUrl: string;
  duckPower?: DuckPowerObject;
  email: string;
  status: UserStatus;
};

export enum UserStatus {
  NEW = "NEW",
  READY = "READY",
  BANNED = "BANNED",
  SIGN_OUT = "SIGN_OUT"
}