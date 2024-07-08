import { Center, KakaoLoginButton } from "../../../../components/login/KakaoLoginButton";
import { redirect } from "next/navigation";
import { api } from "../../../../lib/api";
import { UserStatus } from "../../../../lib/client/object/user.object";


export default async function Login(props: any) {


  return (
    <>
      <div className="flex">
        <Center>
          <KakaoLoginButton>카카오 로그인</KakaoLoginButton>
        </Center>
      </div>
    </>
  );
}