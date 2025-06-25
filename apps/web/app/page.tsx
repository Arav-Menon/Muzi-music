import Link from "next/link";

export default function Home() {

  console.log(process.env.NEXTAUTH_SECRET)

  return (
    <>

    <div className="flex justify-center items-center h-screen flex-col gap-4 " >
     <h1 className="text-5xl font-black" >Home page</h1>
     <Link href="/api/auth/signin" className="border-white rounded border-2 text-red-400" >Go to signin page</Link>

    </div>

    </>
  );
}
