const dotenv = require('dotenv');
dotenv.config();

const config = {
    API: process.env.API
}

module.exports = config;