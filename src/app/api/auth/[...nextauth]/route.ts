import NextAuth from 'next-auth'

const authOptions = {
  // Configure one or more authentication providers
  providers: [],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
