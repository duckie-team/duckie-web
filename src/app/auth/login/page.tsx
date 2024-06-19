'use client';
import {Center, KakaoLoginButton} from "../../../../components/onboarding/KakaoLoginButton";
import {redirect, useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {api} from "../../../../lib/api";
import {showToast} from 'react-next-toast';
import {UserObject} from "../../../../lib/client/object/user.object";
import {APIResponseError} from "../../../../lib/client/error";

export default function Login() {

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        (async () => {
            console.log(localStorage.getItem("accessToken"))
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


export type AuthKakaoResponse = {
    isNewUser: boolean;
    accessToken: string;
    user: UserObject;
};
