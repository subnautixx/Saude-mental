import { Module } from "@nestjs/common";
import { RecomendaOModuleBase } from "./base/recomendaO.module.base";
import { RecomendaOService } from "./recomendaO.service";
import { RecomendaOController } from "./recomendaO.controller";
import { RecomendaOResolver } from "./recomendaO.resolver";

@Module({
  imports: [RecomendaOModuleBase],
  controllers: [RecomendaOController],
  providers: [RecomendaOService, RecomendaOResolver],
  exports: [RecomendaOService],
})
export class RecomendaOModule {}
