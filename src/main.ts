import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cors } from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  //responsavel por conectar o front com API.
const cors =require('cors');
app.use(cors());

  await app.listen(3000);
}
bootstrap()
