import NextAuth from "next-auth";
import { authoptions } from "../../../../../../packages/lib/auth"
// import { authoptions } from "@repo/lib/authoptions"

const handler = NextAuth(authoptions)

export { handler as GET, handler as POST }