import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuentasModule } from './cuentas/cuentas.module';

@Module({
  imports: [CuentasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
