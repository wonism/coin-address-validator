/**
 * polyfill from MDN
 */
/* eslint-disable */
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength,padString) {
    targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
    padString = String((typeof padString !== 'undefined' ? padString : ' '));
    if (this.length > targetLength) {
      return String(this);
    }
    else {
      targetLength = targetLength-this.length;

      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0,targetLength) + String(this);
    }
  };
}
/* eslint-enable */

const numberToHex = number => Math.round(number).toString(16).padStart(2, '0');

export const toHex = arr =>
  arr.reduce((hex, char) => (hex + numberToHex(char)), '');

export { decode } from './base58';
export { sha256 } from './sha256';
