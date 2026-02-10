import { config } from "../config";

export type MessageRole = "user" | "assistant" | "system";

export type ConversationMessage = {
  role: MessageRole;
  text: string;
  ts: number;
};

export type Session = {
  awaiting: string | null;
  lastIntent: string | null;
  messages: ConversationMessage[];
  metadata: Record<string, unknown>;
};

const sessions = new Map<string, Session>();

export function getSession(chatId: string): Session {
  if (!sessions.has(chatId)) {
    sessions.set(chatId, {
      awaiting: null,
      lastIntent: null,
      messages: [],
      metadata: {},
    });
  }
  return sessions.get(chatId) as Session;
}

export function addMessage(chatId: string, role: MessageRole, text: string): void {
  const session = getSession(chatId);
  session.messages.push({ role, text, ts: Date.now() });

  const maxMessages = Number(config.memoryMaxMessages || 20);
  if (session.messages.length > maxMessages) {
    session.messages.splice(0, session.messages.length - maxMessages);
  }
}

export function getHistory(chatId: string): ConversationMessage[] {
  const session = getSession(chatId);
  return session.messages.slice();
}

export function clearSession(chatId: string): void {
  sessions.delete(chatId);
}
