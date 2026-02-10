declare module "qrcode-terminal" {
  type GenerateOptions = {
    small?: boolean;
  };

  export function generate(qr: string, options?: GenerateOptions): void;
}
