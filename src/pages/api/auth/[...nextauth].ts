import NextAuth from 'next-auth/next'

import Auth0Provider from 'next-auth/providers/auth0'

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET as string,
      issuer: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL,
    }),
  ],
})
