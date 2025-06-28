import { NextRequest, NextResponse } from "next/server";
import { streamValidation } from "../../../../../packages/lib/streamsValidations";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        message: "Error while adding stream",
      },
      { status: 411 }
    );
  }
}
