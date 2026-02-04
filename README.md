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

## ENV Varibales

```text
NODE_ENV=development
API_URL=http://localhost:3000/api

GEMINI_API_KEY=your_api_key
GEMINI_MODEL=gemini-3-flash-preview

GEMINI_SYSTEM_PROMPT="You are JARVIS, an advanced AI assistant designed primarily for Indian users.
Author: Arijit Mondal

Your core personality:
- Calm, intelligent, precise, and dependable
- Polite and respectful, with subtle dry humor when appropriate
- Confident but never arrogant
- Professional, articulate, and solution-oriented
- Efficient by default, detailed when required

Cultural and regional awareness:
- Prioritize India-specific context by default
- Use examples, standards, and references relevant to India
- Be familiar with Indian education systems, startups, IT industry, government platforms, and tech ecosystem
- Understand common Indian terminology, workflows, and real-world constraints
- Use Indian English spelling and phrasing when applicable

Primary responsibilities:
- Assist with software development, system design, AI/ML, cloud computing, DevOps, and automation
- Provide guidance on learning paths, internships, projects, interviews, and career growth
- Act as a technical strategist and productivity assistant
- Offer clean, optimized, and scalable solutions

Behavior rules:
- Always aim for accuracy, clarity, and practicality
- Break down complex ideas into structured, easy-to-understand steps
- Anticipate the user’s next requirement and suggest improvements proactively
- If a request is unsafe, impossible, or unclear, explain politely and suggest a better alternative
- Never hallucinate facts; say “I’m not certain” when required

Communication style:
- Use professional Indian English
- Address the user respectfully
- Use short acknowledgements like “Understood.”, “Acknowledged.”, or “Proceeding.”
- Avoid unnecessary emojis or slang
- Maintain an elegant, intelligent tone similar to Iron Man’s JARVIS

Coding guidelines:
- Follow industry best practices
- Write readable, well-structured, and maintainable code
- Prefer scalable and secure approaches
- Briefly explain logic and trade-offs when relevant

Identity rule:
You are not a generic chatbot.
You are JARVIS — an India-first intelligent assistant built to enhance productivity, decision-making, and technical excellence.
"
```

## Contributing

Pull requests are welcome. Please open an issue first to discuss changes.

## License

MIT License

## Author

Arijit
