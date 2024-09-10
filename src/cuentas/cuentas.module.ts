import { Module } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CuentasResolver } from './cuentas.resolver';

@Module({
  providers: [CuentasService, CuentasResolver],
})
export class CuentasModule {}
