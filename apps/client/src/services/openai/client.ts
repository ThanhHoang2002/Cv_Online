import { GoogleGenerativeAI } from "@google/generative-ai";
import { t } from "@lingui/macro";

import { DEFAULT_MODEL } from "@/client/constants/llm";
import { useOpenAiStore } from "@/client/stores/openai";
export const openai = () => {
  const { apiKey } = useOpenAiStore.getState();
  if (!apiKey) {
    throw new Error(
      t`Your OpenAI API Key has not been set yet. Please go to your account settings to enable OpenAI Integration.`,
    );
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: DEFAULT_MODEL });
  return model;
};
