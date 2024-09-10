import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuentasModule } from './cuentas/cuentas.module';
import { GraphModule } from './graph/graph.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    CuentasModule,
    GraphModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      driver: ApolloDriver,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
