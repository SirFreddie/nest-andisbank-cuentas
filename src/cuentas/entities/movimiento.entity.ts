import { ApiProperty } from '@nestjs/swagger';
import { Field, Int, ObjectType, InputType, Float } from '@nestjs/graphql';

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

@InputType()
export class MovimientoInput {
  @ApiProperty()
  @Field(() => Int)
  fecha: number;

  @ApiProperty()
  @Field(() => Float)
  monto: number;

  @ApiProperty()
  @Field()
  tipo: string;
}
