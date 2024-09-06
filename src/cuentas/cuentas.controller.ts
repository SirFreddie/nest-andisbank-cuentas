import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';
import {
  ApiBody,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Cuenta } from './entities/cuenta.entity';
import { Movimiento } from './entities/movimiento.entity';

@ApiTags('Cuentas')
@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}

  @ApiNotFoundResponse({ description: 'Cuenta no encontrada' })
  @ApiOkResponse({ description: 'Cuenta encontrada', type: Cuenta })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentasService.findOne(+id);
  }

  @ApiOkResponse({ description: 'Saldo encontrado', type: Number })
  @ApiNotFoundResponse({ description: 'Saldo no encontrado' })
  @Get(':id/saldo')
  findSaldo(@Param('id') id: string) {
    return this.cuentasService.findSaldo(+id);
  }

  @ApiOkResponse({ description: 'Movimientos encontrados', type: [Movimiento] })
  @ApiNotFoundResponse({ description: 'Movimientos no encontrados' })
  // TODO: QUERY PARAMS, FECHA DE INICIO Y FECHA DE FIN OPCIONALES.
  @Get(':id/movimientos')
  findMovimientos(@Param('id') id: string) {
    return this.cuentasService.findMovimientos(+id);
  }

  @ApiNotFoundResponse({ description: 'Cuenta origen no encontrada' })
  @ApiNotFoundResponse({ description: 'Cuenta destino no encontrada' })
  @ApiForbiddenResponse({ description: 'Saldo insuficiente' })
  @ApiOkResponse({ description: 'Transferencia realizada' })
  @ApiBody({ type: CreateTransferenciaDto })
  @Post('transferir/propia')
  transferirPropia(@Body() createTransferenciaDto: CreateTransferenciaDto) {
    return this.cuentasService.transferirPropia(createTransferenciaDto);
  }

  @ApiNotFoundResponse({ description: 'Cuenta origen no encontrada' })
  @ApiNotFoundResponse({ description: 'Cuenta destino no encontrada' })
  @ApiForbiddenResponse({ description: 'Saldo insuficiente' })
  @ApiOkResponse({ description: 'Transferencia realizada' })
  @ApiBody({ type: CreateTransferenciaDto })
  @Post('transferir/terceros')
  transferirTerceros(@Body() createTransferenciaDto: CreateTransferenciaDto) {
    return this.cuentasService.transferirTerceros(createTransferenciaDto);
  }

  @ApiNotFoundResponse({ description: 'Cuenta origen no encontrada' })
  @ApiNotFoundResponse({ description: 'Cuenta destino no encontrada' })
  @ApiForbiddenResponse({ description: 'Saldo insuficiente' })
  @ApiOkResponse({ description: 'Transferencia realizada' })
  @ApiBody({ type: CreateTransferenciaDto })
  @Post('transferir/externas')
  transferirExternos(@Body() createTransferenciaDto: CreateTransferenciaDto) {
    return this.cuentasService.transferirExternos(createTransferenciaDto);
  }
}
