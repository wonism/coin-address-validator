const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const BASE = ALPHABET.length;

const ALPHABET_MAP = ALPHABET.split('').reduce((lookup, char, index) => ({
  ...lookup,
  [char]: index,
}), {});

const decode = (string) => {
  if (string.length === 0) {
    return [];
  }

  const bytes = [0];

  for (let i = 0, len = string.length; i < len; i += 1) {
    const c = string[i];

    if (!(c in ALPHABET_MAP)) {
      throw new Error('Non base-58 character');
    }

    for (let j = 0, innerLen = bytes.length; j < innerLen; j += 1) {
      bytes[j] *= BASE;
    }

    bytes[0] += ALPHABET_MAP[c];

    let carry = 0;
    for (let j = 0, innerLen = bytes.length; j < innerLen; j += 1) {
      bytes[j] += carry;
      carry = bytes[j] >> 8;
      bytes[j] &= 0xff;
    }

    while (carry) {
      bytes.push(carry & 0xff);
      carry >>= 8;
    }
  }

  for (let i = 0, len = string.length; string[i] === '1' && i < len - 1; i += 1) {
    bytes.push(0);
  }
  return bytes.reverse();
};

export { decode, decode as default };
