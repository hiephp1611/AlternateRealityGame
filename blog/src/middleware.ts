import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import * as jose from 'jose'

export async function middleware(request: NextRequest) {

  const url = request.nextUrl.clone()

  if (url.pathname === '/') {

    const token = request.cookies.get('jwt')?.value || ""
    const res = await jose.jwtVerify(token, new TextEncoder().encode("thisSecretShouldBeStoredInAnEnvironmentVariable"))
    .catch(() => false) // catch error if token is invalid

    if (res) {
      return NextResponse.next()
    } else {
      url.pathname = '/intercept'
      return NextResponse.redirect(url)
    }
  } 
}
