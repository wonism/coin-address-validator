import coinAddressValidator from '../src';

const isBtcAddress  = coinAddressValidator.validate('1Gz3SRHzmzV8NwhUe5LQkTy5ysH1aqevAP', 'btc', 'prod');
const isEthAddress = coinAddressValidator.validate('0x9e093a64da766c6f1400158db028cc9946b8ae1f', 'eth', 'prod');
const isXrpAddress = coinAddressValidator.validate('rh5yrZSwXTAXdiHyc7xiyZ95FdjsfYWmSY', 'xrp', 'prod');
const isLtcAddress = coinAddressValidator.validate('LRitYWYuMvnJyrms4jVTiAj5rcTVomHvPx', 'ltc', 'prod');

console.log(isBtcAddress);
console.log(isEthAddress);
console.log(isXrpAddress);
console.log(isLtcAddress);
