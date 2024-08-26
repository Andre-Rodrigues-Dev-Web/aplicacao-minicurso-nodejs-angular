require('dotenv').config();

module.exports = {
    apiUrl: process.env.API_URL,
    port: process.env.PORT || 3000,
};
