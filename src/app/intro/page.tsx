"use client"
import React from 'react';
import {useRouter} from "next/navigation";

export default function Intro() {
    const router = useRouter()

    return (
        <button type="button" onClick={() => router.push('/auth/login')}>
            로그인 하러가기
        </button>
    )
}