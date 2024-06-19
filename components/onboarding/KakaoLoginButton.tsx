'use client';
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import KakaoLoginLogo from "../../assets/kakaoLoginLogo.png"

const StyledKakaoLoginButton = styled.button`
    width: 10%;
    height: 44px;
    background-color: #fee500;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    gap: 8px;
    transition: 200ms;
    color: #000000;

    &:hover {
        background-color: #f1d900;
    }
`;
export function KakaoLoginButton({children}: {
    children: React.ReactNode;
}) {

    const kakaoLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_OAUTH_REDIRECT_URL}&response_type=code`;
    };

    return (
        <StyledKakaoLoginButton onClick={kakaoLogin}>
            <Image src={KakaoLoginLogo} width={20} height={20} alt=""/>
            {children}
        </StyledKakaoLoginButton>
    );
}

export const Center = styled.div`
    width: 100%;
    height: calc(100vh - 53.5px - 52px);
    display: flex;
    align-items: center;
    justify-content: center;
`;