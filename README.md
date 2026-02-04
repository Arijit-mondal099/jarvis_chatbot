# Jarvis Chatbot

## Overview

A conversational AI chatbot inspired by Jarvis, designed to assist users with intelligent responses and task automation. Built with Next.js for modern web integration.

## Features

- Natural language processing
- Context-aware responses
- Multi-turn conversations
- Easy Next.js integration
- Server-side and client-side support

## Installation

```bash
npm install
# or
yarn install
```

## Usage

```javascript
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { ENV } from "./env";

const ai = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });

export const LLM = ai.chats.create({
  model: ENV.GEMINI_MODEL,
  history: [],
  config: {
    systemInstruction: ENV.GEMINI_SYSTEM_PROMPT,
    thinkingConfig: {
      thinkingLevel: ThinkingLevel.LOW,
    },
  },
});

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
```

## Requirements

- Node.js 16+
- Next.js 12+
- See `package.json` for dependencies

## Contributing

Pull requests are welcome. Please open an issue first to discuss changes.

## License

MIT License

## Author

Arijit
