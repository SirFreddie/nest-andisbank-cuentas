import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';

@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentasService.findOne(+id);
  }

  @Get(':id/saldo')
  findSaldo(@Param('id') id: string) {
    return this.cuentasService.findSaldo(+id);
  }

  // TODO: QUERY PARAMS, FECHA DE INICIO Y FECHA DE FIN OPCIONALES.
  @Get(':id/movimientos')
  findMovimientos(@Param('id') id: string) {
    return this.cuentasService.findMovimientos(+id);
  }

  // TODO: EN EL BODY VA CUENTA ORIGEN, CUENTA DESTINO, MONTO.
  @Post('transferir/propia')
  transferirPropia(@Body() createTransferenciaDto: CreateTransferenciaDto) {
    // TODO: TRANSFERIR ENTRE CUENTAS PROPIAS
    return this.cuentasService.transferirPropia(createTransferenciaDto);
  }

  // TODO: EN EL BODY VA CUENTA ORIGEN, CUENTA DESTINO, MONTO.
  @Post('transferir/terceros')
  transferirTerceros(@Body() createTransferenciaDto: CreateTransferenciaDto) {
    return this.cuentasService.transferirTerceros(createTransferenciaDto);
  }

  // TODO: EN EL BODY VA CUENTA ORIGEN, CUENTA DESTINO, MONTO, BANCO DESTINO.
  @Post('transferir/externas')
  transferirExternos(@Body() createTransferenciaDto: CreateTransferenciaDto) {
    // TODO: TRANSFERIR ENTRE CUENTAS EXTERNAS
    return this.cuentasService.transferirExternos(createTransferenciaDto);
  }
}
