import { Module } from "@nestjs/common";
import { SessODeMeditaOGuiadaModuleBase } from "./base/sessODeMeditaOGuiada.module.base";
import { SessODeMeditaOGuiadaService } from "./sessODeMeditaOGuiada.service";
import { SessODeMeditaOGuiadaController } from "./sessODeMeditaOGuiada.controller";
import { SessODeMeditaOGuiadaResolver } from "./sessODeMeditaOGuiada.resolver";

@Module({
  imports: [SessODeMeditaOGuiadaModuleBase],
  controllers: [SessODeMeditaOGuiadaController],
  providers: [SessODeMeditaOGuiadaService, SessODeMeditaOGuiadaResolver],
  exports: [SessODeMeditaOGuiadaService],
})
export class SessODeMeditaOGuiadaModule {}
