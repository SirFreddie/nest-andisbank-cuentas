export const CUENTAS_BANCOS_EXTERNOS = {
  ['santander']: [
    {
      id: 1,
      saldo: 1000,
      movimientos: [
        {
          id: 1,
          fecha: new Date().getTime() + 30000,
          monto: 1000,
          tipo: 'Deposito',
        },
      ],
    },
    {
      id: 2,
      saldo: 2000,
      movimientos: [
        {
          id: 1,
          fecha: new Date().getTime(),
          monto: 2000,
          tipo: 'Deposito',
        },
        {
          id: 2,
          fecha: new Date().getTime() + 10000,
          monto: 500,
          tipo: 'Extraccion',
        },
      ],
    },
    {
      id: 3,
      saldo: 3000,
      movimientos: [
        {
          id: 1,
          fecha: new Date().getTime(),
          monto: 3000,
          tipo: 'Deposito',
        },
        {
          id: 2,
          fecha: new Date().getTime() + 20000,
          monto: 1000,
          tipo: 'Extraccion',
        },
      ],
    },
  ],
  ['nestor-bank']: [
    {
      id: 1,
      saldo: 1000,
      movimientos: [
        {
          id: 1,
          fecha: new Date().getTime() + 30000,
          monto: 1000,
          tipo: 'Deposito',
        },
      ],
    },
    {
      id: 2,
      saldo: 2000,
      movimientos: [
        {
          id: 1,
          fecha: new Date().getTime(),
          monto: 2000,
          tipo: 'Deposito',
        },
        {
          id: 2,
          fecha: new Date().getTime() + 10000,
          monto: 500,
          tipo: 'Extraccion',
        },
      ],
    },
    {
      id: 3,
      saldo: 3000,
      movimientos: [
        {
          id: 1,
          fecha: new Date().getTime(),
          monto: 3000,
          tipo: 'Deposito',
        },
        {
          id: 2,
          fecha: new Date().getTime() + 20000,
          monto: 1000,
          tipo: 'Extraccion',
        },
      ],
    },
  ],
};
