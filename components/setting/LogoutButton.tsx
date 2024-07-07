"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter()
  return (
    <button onClick={() => { router.push('/')}}>
      로그아웃 하기
    </button>
  )
}