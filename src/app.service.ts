import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ANDISBANK - CUENTAS API REST - ¡Hola Mundo!';
  }
}
