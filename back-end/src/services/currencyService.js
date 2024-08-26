const axios = require('axios');
const { apiUrl } = require('../../config/config');

class CurrencyService {
    async getExchangeRates(baseCurrency) {
        try {
            const response = await axios.get(`${apiUrl}${baseCurrency}`);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao buscar as cotações.');
        }
    }
}

module.exports = new CurrencyService();
