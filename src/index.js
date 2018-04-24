// import 'babel-polyfill';
import { toHex, sha256, decode } from './utils';
import currencies from './currencies';

const DEFAULT_CURRENCY_NAME = 'bitcoin';
const DEFAULT_NETWORK_TYPE = 'prod';

const PRODUCTION = 'prod';
const TEST = 'testnet';

const coinAddressValidator = {
  getAddressType: (address) => {
    const decoded = decode(address);
    const { length } = decoded;

    if (length !== 25) {
      return null;
    }

    const checksum = toHex(decoded.slice(length - 4, length));
    const body = toHex(decoded.slice(0, length - 4));
    const goodChecksum = sha256(sha256(body)).substr(0, 8);

    return checksum === goodChecksum ? toHex(decoded.slice(0, 1)) : null;
  },
  validate: (address, currencyNameOrSymbol = DEFAULT_CURRENCY_NAME, networkType = DEFAULT_NETWORK_TYPE) => {
    const currency = currencies.getByNameOrSymbol(currencyNameOrSymbol);

    if (currency && currency.validator) {
      return currency.validator.isValidAddress(address);
    }

    const addressType = coinAddressValidator.getAddressType(address);
    const correctAddressTypes = (networkType === PRODUCTION || networkType === TEST) ? (
      currency.addressTypes[networkType]
    ) : (
      currency.addressTypes[PRODUCTION].concat(currency.addressTypes[TEST])
    );

    return correctAddressTypes.indexOf(addressType) !== -1;
  },
};

export default coinAddressValidator;
