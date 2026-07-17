// src/app.module.ts
import { Module } from '@nestjs/common';
import { EpiModule } from './epi.module';
import { RiscoModule } from './risco.module';
import { TreinamentoModule } from './treinamento.module';
import { AuthService } from '../service/auth/auth.service';
import { AuthController } from '../controller/auth/auth.controller';


@Module({
  imports: [EpiModule, RiscoModule, TreinamentoModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}