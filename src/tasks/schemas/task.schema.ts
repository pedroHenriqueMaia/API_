import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    nome: String,
    raca: String,
    cor: String
})