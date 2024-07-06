"use client"
import React from 'react';
import { useRouter } from "next/navigation";

export default function Onboarding() {

  const router = useRouter()
  const routeToIntro = () => {
    router.push('/')
    localStorage.clear()
  };

    const routeToHome = () => {
        router.push('/home')
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <button type="button" onClick={() => {
                routeToHome()
            }}>
                홈으로 가기
            </button>
            <button type="button" onClick={() => {
                routeToIntro()
            }}>
                로그아웃 하기
            </button>
        </div>
    )
}