export type UserObject = {
  id: number;
  nickName: string;
  profileImageUrl: string;
  email: string;
  status: "NEW" | "READY" | "BANNED" | "SIGN_OUT";
};
