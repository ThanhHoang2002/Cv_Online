/* eslint-disable lingui/text-restrictions */

import { detect, fromStorage, fromUrl } from "@lingui/detect-locale";
import { t } from "@lingui/macro";

import { DEFAULT_MAX_TOKENS, DEFAULT_MODEL } from "@/client/constants/llm";
import { useOpenAiStore } from "@/client/stores/openai";

import { openai } from "./client";
const PROMPT = `You are an AI writing assistant professionally specialized in writing copy for resumes.
Do not return anything else except the text you improved. It should not begin with a newline. It should not have any prefix or suffix text.
Change the tone of the following paragraph to be {mood} and returns in the language of the text:

Text: """{input}"""

Revised Text: """`;
const PROMPT_VI = `Bạn là một trợ lý viết AI chuyên chỉnh sửa nội dung cho sơ yếu lý lịch sử dụng tiếng việt. 
Chỉ trả về nội dung văn bản đã được cải thiện. Không được bắt đầu bằng dòng trống. Không được có bất kỳ tiền tố hay hậu tố nào. 
Hãy thay đổi giọng điệu của đoạn văn sau thành {mood} và trả về bằng ngôn ngữ tiếng việt:

Văn bản: """{input}"""

Văn bản đã chỉnh sửa: """`;
type Mood = "casual" | "professional" | "confident" | "friendly";

export const changeTone = async (text: string, mood: Mood) => {
  const detectedLocale = detect(fromUrl("locale"), fromStorage("locale"));
  const prompt = (detectedLocale === "vi-VN" ? PROMPT_VI : PROMPT)
    .replace("{mood}", mood)
    .replace("{input}", text);
  const { model, maxTokens } = useOpenAiStore.getState();

  const result = await openai().chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: model ?? DEFAULT_MODEL,
    max_tokens: maxTokens ?? DEFAULT_MAX_TOKENS,
    temperature: 0.5,
    stop: ['"""'],
    n: 1,
  });

  if (result.choices.length === 0) {
    throw new Error(t`OpenAI did not return any choices for your text.`);
  }

  return result.choices[0].message.content ?? text;
};
