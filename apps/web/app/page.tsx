import Link from "next/link";

export default function Home() {

  console.log(process.env.NEXTAUTH_SECRET)

  return (
    <>
     <Link href="/api/auth/signin" className="border-white rounded border-2 text-red-400" >Go to signin page</Link>


    </>
  );
}
