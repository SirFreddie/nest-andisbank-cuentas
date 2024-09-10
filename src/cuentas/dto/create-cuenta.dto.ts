import { InputType, Field, Int } from '@nestjs/graphql';
import { Movimiento, MovimientoInput } from '../entities/movimiento.entity';

@InputType()
export class CreateCuentaDto {
  @Field()
  saldo: number;

  @Field(() => [MovimientoInput]) // Asegúrate de usar MovimientoInput aquí
  movimientos: MovimientoInput[];
}
