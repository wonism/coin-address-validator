const isValidAddress = address => /^r[1-9A-HJ-NP-Za-km-z]{25,34}$/.test(address);

export default {
  isValidAddress,
};
