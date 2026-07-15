// src/app.module.ts
import { Module } from '@nestjs/common';
import { EpiModule } from './epi.module';
import { RiscoModule } from './risco.module';
import { TreinamentoModule } from './treinamento.module';

@Module({
  imports: [EpiModule, RiscoModule, TreinamentoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}