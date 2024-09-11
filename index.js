"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const Tarefas_1 = __importDefault(require("./models/Tarefas"));
// Inicialização do Express e conexão com MongoDB
const app = (0, express_1.default)();
mongoose_1.default.connect('mongodb://localhost:27017/gerenciador', {})
    .then(() => {
    console.log('Banco conectado');
})
    .catch((err) => {
    console.error('Erro ao conectar ao banco:', err);
});
// Servir arquivos estáticos
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Função para construir caminhos para os arquivos
function Root(page) {
    return path_1.default.join(__dirname, `public/${page}`);
}
// Definir um modelo Mongoose para Tarefa (ajuste conforme necessário)
// Rota principal
app.get('/', async (req, res) => {
    try {
        const tarefas = await Tarefas_1.default.find().exec();
        res.send(`
      
        ${tarefas.map(tarefa => `
          <div>
            <h2>${tarefa.titulo}</h2>
            <p>${tarefa.conteudo}</p>
            <a href="#">${tarefa.slug}</a>
          </div>
        `).join('')}
      </body>
      </html>
    `);
    }
    catch (err) {
        res.status(500).send('Erro ao buscar tarefas');
    }
});
// Rota para adicionar novas tarefas (a ser implementada)
app.get('/add', (req, res) => {
    res.send('Adicionar tarefa');
});
// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
