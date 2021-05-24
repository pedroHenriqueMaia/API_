import { Document } from 'mongoose';

export class Task extends Document{
    nome: String;
    raca: String;
    cor: String;
}
