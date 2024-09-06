import { ApiProperty } from '@nestjs/swagger';

export class Movimiento {
  @ApiProperty()
  id: number;

  @ApiProperty()
  fecha: number;

  @ApiProperty()
  monto: number;

  @ApiProperty()
  tipo: string;
}
