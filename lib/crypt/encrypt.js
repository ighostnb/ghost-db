const cryptoJS = require('crypto-js');
const env = require('dotenv');

env.config();

/// encrypt data
/// CRYPT_SECRET in .env is required
module.exports = (data) => {
    return cryptoJS.AES.encrypt(data, process.env.CRYPT_SECRET).toString();
}