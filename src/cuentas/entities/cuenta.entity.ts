import { ApiProperty } from '@nestjs/swagger';
import { Movimiento } from './movimiento.entity';

export class Cuenta {
  @ApiProperty()
  id: number;

  @ApiProperty()
  saldo: number;

  @ApiProperty({ type: [Movimiento] })
  movimientos: Movimiento[];
}
