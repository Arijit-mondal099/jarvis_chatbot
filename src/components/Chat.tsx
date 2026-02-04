"use client";

import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { MarkdownComponent } from "./MarkdownComponent";
import "highlight.js/styles/github-dark.css";
import { useAppContext } from "@/context/AppContext";


export const Chat = () => {
  const { messages, loading } = useAppContext();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return messages.length ? (
    <div className="flex flex-col gap-6 w-full pb-6">
      {messages.map((msg) =>
        msg.role === "user" ? (
          <div className="flex justify-end" key={msg.id}>
            <div className="flex flex-col items-end gap-2 max-w-[80%]">
              <p className="py-3 px-4 rounded-3xl bg-zinc-700 text-white whitespace-pre-wrap">
                {msg.text}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex" key={msg.id}>
            <div className="flex flex-col gap-2 w-full">
              <div className="py-3 px-4 rounded-3xl bg-zinc-800 text-gray-100 prose prose-invert prose-sm max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={MarkdownComponent}
                >
                  {msg.text}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ),
      )}

      {loading && (
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce" />
            </div>

            <span className="text-sm text-gray-400 font-medium">
              Thinking...
            </span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-bold text-white">
          How can I assist you today?
        </h2>
        <p className="text-zinc-400 text-lg">
          JARVIS is online — ready to help with anything you need
        </p>
      </div>
    </div>
  );
};
