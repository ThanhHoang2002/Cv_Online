import { create } from "zustand";
import { persist } from "zustand/middleware";

import { DEFAULT_MAX_TOKENS, DEFAULT_MODEL } from "../constants/llm";

type OpenAIStore = {
  baseURL: string | null;
  setBaseURL: (baseURL: string | null) => void;
  apiKey: string | null;
  setApiKey: (apiKey: string | null) => void;
  model: string | null;
  setModel: (model: string | null) => void;
  maxTokens: number | null;
  setMaxTokens: (maxTokens: number | null) => void;
};

export const useOpenAiStore = create<OpenAIStore>()(
  persist(
    (set) => {
      set({
        baseURL: "http://localhost:11434/v1",
        apiKey: "sk-1234567890abcdef",
        model: DEFAULT_MODEL,
        maxTokens: DEFAULT_MAX_TOKENS,
      });
      return {
        baseURL: "http://localhost:11434/v1",
        setBaseURL: (baseURL: string | null) => {
          set({ baseURL });
        },
        apiKey: "sk-1234567890abcdef",
        setApiKey: (apiKey: string | null) => {
          set({ apiKey });
        },
        model: DEFAULT_MODEL,
        setModel: (model: string | null) => {
          set({ model });
        },
        maxTokens: DEFAULT_MAX_TOKENS,
        setMaxTokens: (maxTokens: number | null) => {
          set({ maxTokens });
        },
      };
    },
    { name: "openai" },
  ),
);
