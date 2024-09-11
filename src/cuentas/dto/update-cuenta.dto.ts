import { Field, InputType, Int } from '@nestjs/graphql';
import { MovimientoInput } from '../entities/movimiento.entity';

@InputType() // Decorar la clase como un tipo de entrada
export class UpdateCuentaDto {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  saldo?: number;

  @Field(() => [MovimientoInput], { nullable: true }) // Use MovimientoInput instead of Movimiento
  movimientos?: MovimientoInput[];
}
