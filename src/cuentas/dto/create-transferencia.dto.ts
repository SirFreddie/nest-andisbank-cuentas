export class CreateTransferenciaDto {
  cuentaOrigen: number;
  cuentaDestino: number;
  monto: number;
  bancoDestino?: string;
}
