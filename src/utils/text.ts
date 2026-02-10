export function normalize(text: string): string {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s+]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function pick<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

export function extractOrderId(text: string): string | null {
  const match = String(text || "").match(/[a-z0-9-]{5,}/i);
  return match ? match[0] : null;
}

export function extractPhone(text: string): string | null {
  const match = String(text || "").match(/(\+?\d[\d\s-]{7,}\d)/);
  return match ? match[1].replace(/\s+/g, "") : null;
}
