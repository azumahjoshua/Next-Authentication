import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
          });
          const user = await response.json();

          if (user) {
            return user; // Return user data if authentication is successful
          } else {
            return null; // Return null if authentication fails
          }
        } catch (error) {
          throw new Error('Failed to authenticate');
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user }; // Merge user data into token
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token; // Set session user to token data
      return session;
    }
  }
});
