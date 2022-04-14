require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth sister pulse harvest bean obscure tomato'; 
let testAccounts = [
"0x89dcb4f53db680e3953d0e44e4ddb413eec0f54716bdfa0e4ac2d209c74b3be8",
"0x9a4f890d69f62016ffc221a07e71caa74512105045d6cad8a9dd1e32b24ce8d7",
"0x3b6604cb5642bef617dcb630a599b6d2b6a5ce8bab057c9e21cde5b88a8f189c",
"0x09dedb070c885a05435048f6c1adfd246534d8ba07c8f6e86123c7fc602965ac",
"0x45a29881ed745fe7efbd141e7c0e69c230215c35cced3483dbfa973db6d0ded7",
"0xc6430f7a19e0086339c3a541d3be397aefd90c5bb8e141c11d3e51613a2124d7",
"0xe400cdb711e0bd360c83c739e6e01b83e07c837f82e033c3e8c62b7112ec413c",
"0xa45edf653dce597035bdbb4250c612f9cea4d7af80e800b11edb789468202cc0",
"0xb9219ffe4d0b540f382bdac9b575592e3515a676136797e2061d0fe06f9e6981",
"0xa24f5285c8dd21f63692f6816bf841ebe3b7866de520af61ac39caddf5311eac"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

