# Coin Address Validator

> To validate crypto currency's wallet address on Node.js and Browser even React Native.
> And It has no dependencies with Node.js core modules.

This project was created with reference to [wallet-address-validator](https://github.com/ognus/wallet-address-validator).

## How to use
```js
import coinAddressValidator from 'coin-address-validator';

const isBtcAddress  = coinAddressValidator.validate('1Gz3SRHzmzV8NwhUe5LQkTy5ysH1aqevAP', 'btc', 'prod');
const isEthAddress = coinAddressValidator.validate('0x9e093a64da766c6f1400158db028cc9946b8ae1f', 'eth', 'prod');
const isXrpAddress = coinAddressValidator.validate('rh5yrZSwXTAXdiHyc7xiyZ95FdjsfYWmSY', 'xrp', 'prod');
const isLtcAddress = coinAddressValidator.validate('LRitYWYuMvnJyrms4jVTiAj5rcTVomHvPx', 'ltc', 'prod');
```

### Methods
__validate(address, [, currency = 'bitcoin'[, networkType = 'prod']])__

type of return value is boolean. (`true` or `false`)

- address : Wallet address to validate
- currency : Optional. Currency name or symbol
- networkType: Optional. Use `prod` to enforce standard address. or Use `testnet` to enforce testnet address. Use `both` for both of them)

__getAddressType(address)__

type of return value is string (if valid base58 addrses) or null
- address: Wallet address

## Supported Currencies
* Auroracoin/AUR, `'auroracoin'` or `'AUR'`
* BeaverCoin/BVC, `'beavercoin'` or `'BVC'`
* Biocoin/BIO, `'biocoin'` or `'BIO'`
* Bitcoin/BTC, `'bitcoin'` or `'BTC'`
* BitcoinCash/BCH, `'bitcoincash'` or `'BCH'`
* BitcoinGold/BTG, `'bitcoingold'` or `'BTG'`
* BitcoinPrivate/BTCP, `'bitcoinprivate'` or `'BTCP'`
* BitcoinZ/BTCZ, `'bitcoinz'` or `'BTCZ'`
* Callisto/CLO, `'callisto'` or `'CLO'`
* Dash, `'dash'` or `'DASH'`
* Decred/DCR, `'decred'` or `'DCR'`
* Digibyte/DGB, `'digibyte'` or `'DGB'`
* Dogecoin/DOGE, `'dogecoin'` or `'DOGE'`
* Ethereum/ETH, `'ethereum'` or `'ETH'`
* EthereumClassic/ETH, `'ethereumclassic'` or `'ETC'`
* EthereumZero/ETZ, `'etherzero'` or `'ETZ'`
* Freicoin/FRC, `'freicoin'` or `'FRC'`
* Garlicoin/GRLC, `'garlicoin'` or `'GRLC'`
* Hush/HUSH, `'hush'` or `'HUSH'`
* Komodo/KMD, `'komodo'` or `'KMD'`
* Litecoin/LTC, `'litecoin'` or `'LTC'`
* Megacoin/MEC, `'megacoin'` or `'MEC'`
* Monero/XMR, `'monero'` or `'XMR'`
* Namecoin/NMC, `'namecoin'` or `'NMC'`
* NEO/NEO, `'NEO'` or `'NEO'`
* NeoGas/GAS, `'neogas'` or `'GAS'`
* Peercoin/PPCoin/PPC, `'peercoin'` or `'PPC'`
* Primecoin/XPM, `'primecoin'` or `'XPM'`
* Protoshares/PTS, `'protoshares'` or `'PTS'`
* Qtum/QTUM, `'qtum'` or `'QTUM'`
* Ripple/XRP, `'ripple'` or `'XRP'`
* Snowgem/SNG, `'snowgem'` or `'SNG'`
* Vertcoin/VTC, `'vertcoin'` or `'VTC'`
* Votecoin/VTC, `'votecoin'` or `'VOT'`
* Zcash/ZEC, `'zcash'` or `'ZEC'`
* Zclassic/ZCL, `'zclassic'` or `'ZCL'`
* ZenCash/ZEN, `'zencash'` or `'ZEN'`
