const app = require('./app');
const { port } = require('../config/config');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
