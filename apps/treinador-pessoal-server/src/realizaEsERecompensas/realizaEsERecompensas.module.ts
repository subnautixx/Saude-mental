import { Module } from "@nestjs/common";
import { RealizaEsERecompensasModuleBase } from "./base/realizaEsERecompensas.module.base";
import { RealizaEsERecompensasService } from "./realizaEsERecompensas.service";
import { RealizaEsERecompensasController } from "./realizaEsERecompensas.controller";
import { RealizaEsERecompensasResolver } from "./realizaEsERecompensas.resolver";

@Module({
  imports: [RealizaEsERecompensasModuleBase],
  controllers: [RealizaEsERecompensasController],
  providers: [RealizaEsERecompensasService, RealizaEsERecompensasResolver],
  exports: [RealizaEsERecompensasService],
})
export class RealizaEsERecompensasModule {}
