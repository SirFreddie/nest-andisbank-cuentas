import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CuentasService } from './cuentas.service';
import { Cuenta } from './entities/cuenta.entity';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';

@Resolver(() => Cuenta)
export class CuentasResolver {
  constructor(private readonly cuentasService: CuentasService) {}

  @Mutation(() => Cuenta)
  createCuenta(@Args('createCuentaInput') createCuentaInput: CreateCuentaDto) {
    return this.cuentasService.create(createCuentaInput);
  }

  @Query(() => [Cuenta], { name: 'cuentas' })
  findAll() {
    return this.cuentasService.findAll();
  }

  @Query(() => Cuenta, { name: 'cuenta' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cuentasService.findOne(id);
  }

  @Mutation(() => Cuenta)
  updateCuenta(@Args('updateCuentaInput') updateCuentaInput: UpdateCuentaDto) {
    return this.cuentasService.update(updateCuentaInput.id, updateCuentaInput);
  }

  @Mutation(() => Cuenta)
  removeCuenta(@Args('id', { type: () => Int }) id: number) {
    return this.cuentasService.remove(id);
  }
}
