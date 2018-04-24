import JsSha from 'jssha';

const HEX = 'HEX';
const SHA_256 = 'SHA-256';

const sha256 = hexString => (new JsSha(hexString, HEX)).getHash(SHA_256, HEX);

export { sha256, sha256 as default };
