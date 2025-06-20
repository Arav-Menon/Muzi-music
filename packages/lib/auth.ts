import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import SpotifyProvider from "next-auth/providers/spotify";
import { prisma } from "@repo/db/prisma";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt"
import { authValidations } from "../lib/inputValidations"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },  
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

        const result = authValidations.safeParse({
          username : credentials?.username,
          email : credentials?.email,
          password : credentials?.password
        })

        if(!result.success) {
          throw new Error("Invalid format")
        }

        const { username, email, password } = result.data

        const existingUser = await prisma.user.findFirst({
          where: { email },
        });

        
        if (existingUser) {
          const passwordMatch = bcrypt.compare(password || "", existingUser?.password)
          if (!passwordMatch) return null;

          return {
            id: existingUser.id,
            username: existingUser.username,
            email: existingUser.email,
          };
        }

        const hasingPassword = bcrypt.hash(password || "" , 5 )

        const newUser = await prisma.user.create({
          data: {
            //@ts-ignore
            username ,
            //@ts-ignore
            email,
            //@ts-ignore
            password : hasingPassword ,
          },
        });

        return {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID ?? "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt", // use JWTs for session
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email, 
        } as any ;
      }
      return session;
    },
  },
};
