import { Module } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CuentasController } from './cuentas.controller';

@Module({
  controllers: [CuentasController],
  providers: [CuentasService],
})
export class CuentasModule {}
