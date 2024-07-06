import { Center, KakaoLoginButton } from "../../../../components/login/KakaoLoginButton";
import { redirect } from "next/navigation";
import { api } from "../../../../lib/api";
import { UserStatus } from "../../../../lib/client/object/user.object";

async function onKakaoLoginSuccess(code: string) {
  if (code !== undefined) {
    const res = await api.login.postKakao({
      code: code
    })
    console.log(res)
    if (res.user.status == UserStatus.READY) {
      redirect('/home')
    } else if (res.user.status == UserStatus.NEW) {
      redirect('/onboarding')
    }
    return res.accessToken
  }

}

export default async function Login(props: any) {

  await onKakaoLoginSuccess(props.searchParams.code)

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