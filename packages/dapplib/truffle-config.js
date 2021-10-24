require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remember snake hockey process front slogan'; 
let testAccounts = [
"0x6cb67dccdf77f1e0475e85ce0c393d1e820f10be65612cdcbd1670f379cf2c3c",
"0x630f7a1607dca4abdaf500c0730e67fefea389c9decd2818b68c86773d43dc7f",
"0xf3135d3c53acc0a632593ac13697f9ad5df65b969c7b4fa2c150167424fa6d3b",
"0x91d33ee6b476d144f5720dd69c7aae4274f603b36e674beb3605e74a8cc66b11",
"0x7ec28395aa01342e0ea9986156edc46fffde2149eb946b5f0f2f9af50f69c9a7",
"0x4430cd6a964aa3c94408c26914aa6936d1264d2606263c8d6b73feb718a12aa6",
"0x410e1b9bec62d7313eb18fbe7261a7245912594e036155f5d799b8db464f1fb1",
"0x66752a5944b8c07bd811996fd30b0e16ce3a0d523d42a1bb40eefb02700fb406",
"0x071874ad5095a9e3d288653acac6d59938414ae776dc6b9fa08f0a0a93473faf",
"0x2c90e1d05020a25bedf561b2545e8dcc1178309003b11b1149ba45715cedca4a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


