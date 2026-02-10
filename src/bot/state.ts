import { config } from "../config";

let botEnabled = config.botEnabled;

export function isBotEnabled(): boolean {
  return botEnabled;
}

export function setBotEnabled(value: boolean): void {
  botEnabled = Boolean(value);
}
