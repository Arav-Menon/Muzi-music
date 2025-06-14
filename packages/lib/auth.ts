import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import SpotifyProvider from "next-auth/providers/spotify";
import { prisma } from "@repo/db/prisma";

export const authoptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, email, password } = req.body;

        const addUser = await prisma.user.create({
          data: {
            username,
            email,
            password,
          },
        });

        return {
          addUser: {
            username,
            email,
            password : "🖕"
          },
        };
      },
    }),

    GoogleProvider({
      clientId: "process.env.GOOGLE_ID",
      clientSecret: "process.env.GOOGLE_SECRET",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    SpotifyProvider({
      clientId: "process.env.SPOTIFY_CLIENT_ID",
      clientSecret: "process.env.SPOTIFY_CLIENT_SECRET",
    }),
  ],
};
