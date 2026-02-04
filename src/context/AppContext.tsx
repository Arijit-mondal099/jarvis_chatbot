"use client";

import { createContext, useCallback, useContext, useState } from "react";

export interface IAppContext {
  messages: Array<{ id: number, role: "user" | "model", text: string }>;
  loading: boolean;
  sentMessage: (prompt: string) => Promise<void>;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<Array<{ id: number, role: "user" | "model", text: string }>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const sentMessage = useCallback(
    async (prompt: string): Promise<void> => {
      setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: prompt }]);
      setLoading(true);

      try {
        const res = await fetch("http://localhost:3000/api/v1/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        });

        const val = await res.json();

        if (val?.success) {
          setMessages((prev) => [...prev, { id: Date.now(), ...val.data }]);
        }
      } catch (error) {
        alert("Oops something went wrong, try again!");
        throw error;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <AppContext.Provider value={{ messages, loading, sentMessage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
