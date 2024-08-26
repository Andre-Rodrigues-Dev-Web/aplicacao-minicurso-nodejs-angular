const currencyService = require('../services/currencyService');

class CurrencyController {
    async getCurrencyRates(req, res) {
        const { base } = req.params;

        try {
            const rates = await currencyService.getExchangeRates(base);
            res.status(200).json(rates);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CurrencyController();
