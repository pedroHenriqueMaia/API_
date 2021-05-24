import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Ola! Acesse, http://localhost:3000/dogs';
  }
}
