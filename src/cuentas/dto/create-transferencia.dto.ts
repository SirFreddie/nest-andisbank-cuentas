import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTransferenciaDto {
  @ApiProperty({
    description: 'Número de cuenta origen',
    example: 1,
  })
  cuentaOrigen: number;
  @ApiProperty({
    description: 'Número de cuenta destino',
    example: 2,
  })
  cuentaDestino: number;
  @ApiProperty({
    description: 'Monto a transferir',
    example: 100,
  })
  monto: number;
  @ApiPropertyOptional({
    description: 'Banco destino',
    example: 'santander',
  })
  bancoDestino?: string;
}
