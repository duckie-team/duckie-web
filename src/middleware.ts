import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from "next/headers";
import { api } from "../lib/api";
import { UserStatus } from "../lib/client/object/user.object";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const code = getCodeFromSearchParams(request.nextUrl.search)
  if (code !== null) {
    const res = await api.login.postKakao({
      code: code
    })
    const user = res.user
    const accessToken = res.accessToken
    const response = NextResponse
    if (accessToken !== undefined) {
      response.next().cookies.set("accessToken", res.accessToken)
    }
    if (user !== undefined) {
      if (user.status == UserStatus.READY) {
        const realRes = response.redirect(new URL('/home', request.url))
        console.log(res.accessToken)
        realRes.cookies.set("accessToken", res.accessToken)
        return realRes
      } else if (user.status == UserStatus.NEW) {
        return response.redirect(new URL('/onboarding', request.url)).cookies.set("accessToken", res.accessToken)
      }
    }
  }
}

function getCodeFromSearchParams(params: string) {
  const regex = /code=([^&]+)/;
  const match = params.match(regex);
  return match ? match[1] : null;
}

export const config = {
  matcher: '/auth/login',
};