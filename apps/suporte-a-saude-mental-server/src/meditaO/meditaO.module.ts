import { Module } from "@nestjs/common";
import { MeditaOModuleBase } from "./base/meditaO.module.base";
import { MeditaOService } from "./meditaO.service";
import { MeditaOController } from "./meditaO.controller";
import { MeditaOResolver } from "./meditaO.resolver";

@Module({
  imports: [MeditaOModuleBase],
  controllers: [MeditaOController],
  providers: [MeditaOService, MeditaOResolver],
  exports: [MeditaOService],
})
export class MeditaOModule {}
