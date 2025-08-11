import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { auth, handlers } = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // This is a placeholder implementation
        // In a real app, you would validate against your database
        if (credentials?.email === 'admin@infrascan.com' && credentials?.password === 'password') {
          return {
            id: '1',
            email: 'admin@infrascan.com',
            name: 'Admin User',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
        }
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // widen token with our custom fields
        // @ts-ignore augmenting token shape for app use
        token.id = (user as any).id
        // @ts-ignore augmenting token shape for app use
        token.avatar = (user as any).avatar
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        // @ts-ignore augmenting session user for app use
        session.user.id = (token as any).id as string
        // @ts-ignore augmenting session user for app use
        session.user.avatar = (token as any).avatar as string
      }
      return session
    }
  }
}) 