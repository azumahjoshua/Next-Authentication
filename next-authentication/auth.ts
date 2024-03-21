import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
        const response = await fetch('http://localhost:5000/api/register',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();
        if(response.ok){
            return {... data.user,token:data.token}
        }{
            return null
        }
        
    }
  })],
});