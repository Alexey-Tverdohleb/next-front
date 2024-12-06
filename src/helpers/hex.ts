import { Buffer } from 'buffer'

export const fromHex = (hex: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string }) => Buffer.from(hex, 'hex')
export const toHex = (bytes: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>) => Buffer.from(bytes).toString('hex')