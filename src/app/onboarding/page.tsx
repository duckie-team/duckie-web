"use client"
import React from 'react';
import {useRouter} from "next/navigation";

export default function Onboarding() {

    const router = useRouter()
    const routeToIntro = () => {
        router.push('/')
        localStorage.clear()
    };


    return (
        <button type="button" onClick={() => {
            routeToIntro()
        }
        }>
            로그아웃 하기
        </button>
    )
}