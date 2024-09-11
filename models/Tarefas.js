"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default;
const Schema = mongoose_1.default.Schema;
const Tarefa = new Schema({
    titulo: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
});
module.exports = mongoose_1.default.model('tarefa', Tarefa);
