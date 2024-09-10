import { Field, InputType, Int } from '@nestjs/graphql';
import { Movimiento } from '../entities/movimiento.entity';

@InputType() // Decorar la clase como un tipo de entrada
export class UpdateCuentaDto {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  saldo?: number;

  @Field(() => [Movimiento], { nullable: true }) // También marca 'movimientos' como opcional si es necesario
  movimientos?: Movimiento[];
}
