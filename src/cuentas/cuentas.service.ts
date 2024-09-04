import { Injectable } from '@nestjs/common';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';
import { CUENTAS_ANDISBANK } from 'src/data/cuentas.mock';
import { CUENTAS_BANCOS_EXTERNOS } from 'src/data/cuentas-otros';

@Injectable()
export class CuentasService {
  cuentas: any[] = CUENTAS_ANDISBANK;
  cuentasExternas: any = CUENTAS_BANCOS_EXTERNOS;

  findOne(id: number) {
    return this.cuentas.find((cuenta) => cuenta.id === id);
  }

  findSaldo(id: number) {
    const saldo = this.cuentas.find((cuenta) => cuenta.id === id).saldo;
    return saldo;
  }

  findMovimientos(id: number) {
    const movimientos = this.cuentas.find(
      (cuenta) => cuenta.id === id,
    ).movimientos;

    return movimientos;
  }

  transferirPropia(createTransferenciaDto: CreateTransferenciaDto) {
    const { cuentaOrigen, cuentaDestino, monto, bancoDestino } =
      createTransferenciaDto;

    const cuentaOrigenObj = this.cuentas.find(
      (cuenta) => cuenta.id === cuentaOrigen,
    );

    if (!cuentaOrigenObj) {
      return 'Cuenta origen no encontrada';
    }

    let cuentaDestinoObj;

    if (bancoDestino) {
      cuentaDestinoObj = this.cuentasExternas[bancoDestino].find(
        (cuenta) => cuenta.id === cuentaDestino,
      );

      if (!cuentaDestinoObj) {
        return 'Cuenta destino no encontrada';
      }
    } else {
      cuentaDestinoObj = this.cuentas.find(
        (cuenta) => cuenta.id === cuentaDestino,
      );
    }

    if (cuentaOrigenObj.saldo < monto) {
      return 'Saldo insuficiente';
    }

    cuentaOrigenObj.saldo -= monto;

    cuentaDestinoObj.saldo += monto;

    const movimientoOrigen = {
      id: cuentaOrigenObj.movimientos.length + 1,
      fecha: new Date().getTime(),
      monto,
      tipo: 'Transferencia',
    };

    const movimientoDestino = {
      id: cuentaDestinoObj.movimientos.length + 1,
      fecha: new Date().getTime(),
      monto,
      tipo: 'Transferencia',
    };

    cuentaOrigenObj.movimientos.push(movimientoOrigen);
    cuentaDestinoObj.movimientos.push(movimientoDestino);

    return 'Transferencia realizada';
  }

  transferirTerceros(transferirCuentaDto: CreateTransferenciaDto) {
    this.transferirPropia(transferirCuentaDto);
  }

  transferirExternos(transferirCuentaDto: CreateTransferenciaDto) {
    return this.transferirPropia(transferirCuentaDto);
  }
}
