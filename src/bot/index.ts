import { Client } from "whatsapp-web.js";
import type { Message } from "whatsapp-web.js";
import * as qrcode from "qrcode-terminal";
import { config } from "../config";
import { handleOwnerCommand } from "./ownerCommands";
import { handleIncomingMessage } from "./messageHandler";
import { isBotEnabled } from "./state";

export function createClient(): Client {
  const client = new Client({});

  client.on("ready", () => {
    console.log("Client is ready!");
  });

  client.on("qr", (qr: string) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("message", async (message: Message) => {
    console.log(message.body);

    if (message.fromMe) {
      await handleOwnerCommand(message);
      return;
    }

    if (message.from === "status@broadcast") return;
    if (config.ignoreGroups && message.from.endsWith("@g.us")) return;
    if (!isBotEnabled()) return;

    await handleIncomingMessage(message);
  });

  return client;
}
