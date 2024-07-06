'use client';
import { Center, KakaoLoginButton } from "../../../../components/onboarding/KakaoLoginButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { api } from "../../../../lib/api";
import { showToast } from 'react-next-toast';
import { APIResponseError } from "../../../../lib/client/error";

// 1. use client 싹 다 없애기
// 2. useEffect -> serverComponent, serverAction, middleWare를 사용해서 처리하기
// 3. API 콜하는 부분 hook을 이용해보기
// 4. directory 구조
// 5. style 관련한거 정리하기
export default function Login() {

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("accessToken") == null) {
        const code = searchParams.get('code')
        if (code) {
          try {
            const res = await api.login.postKakao({
              code: code
            });
            showToast.success(`${res.user.email}님 로그인을 무사히 성공했습니다`)
            localStorage.setItem("accessToken", res.accessToken);
            api.updateAuth(res.accessToken);
            router.push("/onboarding");
          } catch (err) {
            if (err instanceof APIResponseError) {
              showToast.error(`서버가 요청을 거부했습니다. ${err.code}`);
            } else {
              showToast.error(`서버에 연결할 수 없습니다.`);
            }
          }
        }
      } else {
        router.push('/onboarding')
      }
    })();
  }, [router, searchParams]);

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