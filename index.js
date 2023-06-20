require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/database');

// Conexão com o banco de dados MongoDB
connectDB();

// Inicialização do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
