import { House } from "lucide"
import Link from "next/link"

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen flex-col ">
        <div className="text-3xl text-red-500 font-bold" >
        Signin page
        </div>
        <br />
        <Link href={"/"} className="text-4xl text-yellow-300 font-black border-white border-1 p-4 rounded  " >
        Go to home
        </Link>

        </div>
    )
}