import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import Tarefa from './models/Tarefas'
import Tarefas from './models/Tarefas';
import { log } from 'console';
// Inicialização do Express e conexão com MongoDB
const app = express();

mongoose.connect('mongodb://localhost:27017/gerenciador', {
  
})
.then(() => {
  console.log('Banco conectado');
})
.catch((err) => {
  console.error('Erro ao conectar ao banco:', err);
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Função para construir caminhos para os arquivos
function Root(page: string) {
  return path.join(__dirname, `public/${page}`);
}

// Definir um modelo Mongoose para Tarefa (ajuste conforme necessário)

// Rota principal
app.get('/', async (req: Request, res: Response) => {
  try {
    const tarefas = await Tarefa.find().exec();
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
  } catch (err) {
    res.status(500).send('Erro ao buscar tarefas');
  }
});

// Rota para adicionar novas tarefas (a ser implementada)
app.get('/add', (req: Request, res: Response) => {
  Root('add.html')
});
app.post('/add', (req:Request, res:Response)=>{
  try{
    Tarefas.findOne({_id: req.params.id}).then((tarefa)=>{{

    }})

  }
  catch(err){
    console.log(err);
    
  }
})

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
