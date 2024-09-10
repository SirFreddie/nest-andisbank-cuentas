import { ApiProperty } from '@nestjs/swagger';
import { Movimiento, MovimientoInput } from './movimiento.entity';
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class Cuenta {
  @ApiProperty()
  @Field(() => Int)
  id: number;

  @ApiProperty()
  @Field()
  saldo: number;

  @ApiProperty({ type: [Movimiento] })
  @Field(() => [Movimiento])
  movimientos: Movimiento[];
}

@InputType()
export class CreateCuentaDto {
  @ApiProperty()
  @Field()
  saldo: number;

  @ApiProperty({ type: [MovimientoInput] })
  @Field(() => [MovimientoInput])
  movimientos: MovimientoInput[];
}
