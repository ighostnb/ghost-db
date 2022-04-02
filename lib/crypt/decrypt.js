const cryptoJS = require('crypto-js');
const env = require('dotenv');

env.config();

/// decrypt data
/// CRYPT_SECRET in .env is required
module.exports = (encryptedData) => {
    const bytes = cryptoJS.AES.decrypt(encryptedData, process.env.CRYPT_SECRET);
    return bytes.toString(cryptoJS.enc.Utf8);
}