import NextAuth from "next-auth";
import { authOptions } from "../../../../../../packages/lib/auth"
// import { authoptions } from "@repo/lib/authoptions"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }