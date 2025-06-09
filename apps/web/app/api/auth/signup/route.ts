import { NextRequest, NextResponse } from "next/server";
import { client } from "@repo/db/client";

export async function POST(req: NextRequest) {
  const { username, email, password } = await req.json();

  const existUser = await client.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existUser) {
    NextResponse.json(
      {
        message: "User already exist",
      },
      { status: 409 }
    );
  }

  const user = await client.user.create({
    //@ts-ignore
    data: {
      username,
      email,
      password,
    },
  });

  return NextResponse.json({
    message: "Your account has been created",
    user,
  });
}
