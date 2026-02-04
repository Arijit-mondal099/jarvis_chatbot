import { LLM } from "@/lib/gemini";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = (await request.json()) as { prompt: string };

    if (!prompt?.trim()) {
      return NextResponse.json(
        { success: false, message: "Please give ma an prompt!" },
        { status: 400 },
      );
    }

    const data = await LLM.sendMessage({ message: prompt });

    return NextResponse.json(
      { success: true, message: "AI gen successfuly!", data: { role: "model", text: data.text } },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error", error },
      { status: 500 },
    );
  }
}
