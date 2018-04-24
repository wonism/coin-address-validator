const numberToHex = number => Math.round(number).toString(16).padStart(2, '0');

export const toHex = arr =>
  arr.reduce((hex, char) => (hex + numberToHex(char)), '');

export { decode } from './base58';
export { sha256 } from './sha256';
