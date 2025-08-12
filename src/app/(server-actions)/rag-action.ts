"use server";

import { type ChatCompletionMessageParam } from "openai/resources/index.mjs";

import { openai } from "@/lib/ai";
import { AI_CONTEXT, SYSTEM_PROMPT } from "@/lib/constants";

export async function ragAction(query: string, chatHistory: ChatCompletionMessageParam[]) {
  const contextEnhancedPrompt = `${SYSTEM_PROMPT}\n\n### CONTEXT BLOCK ###\n${AI_CONTEXT}\n### END CONTEXT ###\n\n`;

  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: contextEnhancedPrompt,
    },
    ...chatHistory,
    {
      role: "user",
      content: query,
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages,
  });

  // Only return plain objects
  return {
    choices: response.choices,
    usage: response.usage,
    id: response.id,
    created: response.created,
    model: response.model,
    object: response.object,
    system_fingerprint: response.system_fingerprint,
    service_tier: response.service_tier,
  };
}
