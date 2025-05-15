// client.interface.ts
export interface ClientInterface {
  send(phone: string): void;
  verify(phone: string, code: string): void;
}
