const isValidAddress = address => /^4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$/.test(address);

export default {
  isValidAddress,
};
