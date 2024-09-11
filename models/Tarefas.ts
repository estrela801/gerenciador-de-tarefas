import mongoose from "mongoose"
mongoose

const Schema = mongoose.Schema
const Tarefa = new Schema({
    titulo:{
        type: String,
        required: true
    },
    conteudo:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    }
})

export = mongoose.model('tarefa', Tarefa)