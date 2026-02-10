import type { Message } from "whatsapp-web.js";
import { sleep, randomBetween } from "../utils/time";

export async function replyWithTyping(
  message: Message,
  replyText: string
): Promise<void> {
  const chat = await message.getChat();
  await chat.sendStateTyping();
  await sleep(randomBetween(600, 1400));
  await message.reply(replyText);
  await chat.clearState();
}
