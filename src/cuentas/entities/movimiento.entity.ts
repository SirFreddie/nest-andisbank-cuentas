import { ApiProperty } from '@nestjs/swagger';
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

// Decorador para los datos de salida
@ObjectType()
export class Movimiento {
  @ApiProperty()
  @Field(() => Int)
  id: number;

  @ApiProperty()
  @Field()
  fecha: number;

  @ApiProperty()
  @Field()
  monto: number;

  @ApiProperty()
  @Field()
  tipo: string;
}

// Decorador para los datos de entrada
@InputType()
export class MovimientoInput {
  @ApiProperty()
  @Field(() => Int)
  fecha: number;

  @ApiProperty()
  @Field()
  monto: number;

  @ApiProperty()
  @Field()
  tipo: string;
}
