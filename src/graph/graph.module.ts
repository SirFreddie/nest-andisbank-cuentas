import { Module } from '@nestjs/common';
import { CuentasModule } from '../cuentas/cuentas.module';
import { CuentasService } from '../cuentas/cuentas.service';
import { CuentasResolver } from '../cuentas/cuentas.resolver';

@Module({
  imports: [CuentasModule],
  providers: [CuentasService, CuentasResolver],
})
export class GraphModule {}
