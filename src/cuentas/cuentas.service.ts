import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';
import { CUENTAS_ANDISBANK } from 'src/data/cuentas.mock';
import { CUENTAS_BANCOS_EXTERNOS } from 'src/data/cuentas-otros';
import { Cuenta } from './entities/cuenta.entity';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { CreateCuentaDto } from './dto/create-cuenta.dto';

@Injectable()
export class CuentasService {
  cuentas: Cuenta[] = CUENTAS_ANDISBANK;
  cuentasExternas: any = CUENTAS_BANCOS_EXTERNOS;

  findOne(id: number) {
    const cuenta = this.cuentas.find((cuenta) => cuenta.id === id);

    if (!cuenta) {
      throw new NotFoundException('Cuenta no encontrada');
    }

    return cuenta;
  }

  findSaldo(id: number) {
    const saldo = this.cuentas.find((cuenta) => cuenta.id === id).saldo;

    if (!saldo) {
      throw new NotFoundException('Saldo no encontrado');
    }

    return saldo;
  }

  findMovimientos(id: number) {
    const movimientos = this.cuentas.find(
      (cuenta) => cuenta.id === id,
    ).movimientos;

    if (!movimientos) {
      throw new NotFoundException('Movimientos no encontrados');
    }

    return movimientos;
  }

  transferirPropia(createTransferenciaDto: CreateTransferenciaDto) {
    const { cuentaOrigen, cuentaDestino, monto, bancoDestino } =
      createTransferenciaDto;

    const cuentaOrigenObj = this.findOne(cuentaOrigen);

    if (!cuentaOrigenObj) {
      throw new NotFoundException('Cuenta origen no encontrada');
    }

    let cuentaDestinoObj;

    if (bancoDestino) {
      cuentaDestinoObj = this.cuentasExternas[bancoDestino].find(
        (cuenta) => cuenta.id === cuentaDestino,
      );

      if (!cuentaDestinoObj) {
        throw new NotFoundException('Cuenta destino no encontrada');
      }
    } else {
      cuentaDestinoObj = this.cuentas.find(
        (cuenta) => cuenta.id === cuentaDestino,
      );
    }

    if (cuentaOrigenObj.saldo < monto) {
      throw new ForbiddenException('Saldo insuficiente');
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

  create(createCuentaInput: CreateCuentaDto) {
    const cuenta: Cuenta = {
      id: this.cuentas.length + 1,
      saldo: createCuentaInput.saldo,
      movimientos: [],
    };

    this.cuentas.push(cuenta);
  }

  findAll() {
    return this.cuentas;
  }

  update(id: number, updateCuentaInput: UpdateCuentaDto) {
    const cuenta = this.findOne(id);

    if (!cuenta) {
      throw new NotFoundException('Cuenta no encontrada');
    }

    const index = this.cuentas.indexOf(cuenta);

    this.cuentas[index] = { ...cuenta, ...updateCuentaInput };

    return this.cuentas[index];
  }

  remove(id: number): Promise<void> {
    const cuenta = this.findOne(id);

    if (!cuenta) {
      throw new NotFoundException('Cuenta no encontrada');
    }

    this.cuentas = this.cuentas.filter((cuenta) => cuenta.id !== id);

    return;
  }
}
