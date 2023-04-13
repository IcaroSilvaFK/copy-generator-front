import { type NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL('/copy', req.url))
}

export const config = {
  matcher: '/',
}
