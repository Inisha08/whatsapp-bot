import type { Message } from "whatsapp-web.js";
import { isBotEnabled, setBotEnabled } from "./state";
import { normalize } from "../utils/text";

export async function handleOwnerCommand(message: Message): Promise<boolean> {
  const text = normalize(message.body);
  if (text === "!bot on") {
    setBotEnabled(true);
    await message.reply("Bot enabled.");
    return true;
  }
  if (text === "!bot off") {
    setBotEnabled(false);
    await message.reply("Bot disabled.");
    return true;
  }
  if (text === "!bot status") {
    await message.reply(`Bot is currently ${isBotEnabled() ? "ON" : "OFF"}.`);
    return true;
  }
  return false;
}
