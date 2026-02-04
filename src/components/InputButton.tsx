"use client";

import { useAppContext } from "@/context/AppContext";
import { useState } from "react";

const InputButton = () => {
  const [prompt, setPrompt] = useState<string>("");
  const { sentMessage } = useAppContext();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    sentMessage(prompt);
    setPrompt("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-zinc-900 rounded-3xl shadow-xl border border-zinc-900 mb-4 mx-2 mt-2"
    >
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="How can i help you today?"
        rows={1}
        className="w-full bg-transparent text-white placeholder-zinc-400 resize-none outline-none px-5 py-4 pr-14 min-h-14 max-h-50 overflow-y-auto"
      />

      <button
        type="submit"
        disabled={!prompt.trim()}
        className={`absolute right-3 bottom-3 p-2 rounded-xl transition-all duration-200 
            ${
              prompt.trim()
                ? "bg-orange-500 text-white hover:bg-orange-700 cursor-pointer"
                : "bg-zinc-600 text-white hover:bg-zinc-700 cursor-not-allowed"
            }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </button>
    </form>
  );
};

export default InputButton;
