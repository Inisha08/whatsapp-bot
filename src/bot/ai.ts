import { config } from "../config";
import type { ConversationMessage } from "./memory";

export type AiContext = {
  messageText: string;
  history: ConversationMessage[];
};

export async function generateAiReply(
  context: AiContext
): Promise<string | null> {
  if (!config.aiEnabled) return null;

  // Placeholder: integrate your AI provider here.
  // Return a string reply or null to fall back to rule-based replies.
  // You can use context.messageText and context.history for context.
  return null;
}
