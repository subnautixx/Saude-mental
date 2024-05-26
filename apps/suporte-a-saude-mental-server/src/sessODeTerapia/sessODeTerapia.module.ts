import { Module } from "@nestjs/common";
import { SessODeTerapiaModuleBase } from "./base/sessODeTerapia.module.base";
import { SessODeTerapiaService } from "./sessODeTerapia.service";
import { SessODeTerapiaController } from "./sessODeTerapia.controller";
import { SessODeTerapiaResolver } from "./sessODeTerapia.resolver";

@Module({
  imports: [SessODeTerapiaModuleBase],
  controllers: [SessODeTerapiaController],
  providers: [SessODeTerapiaService, SessODeTerapiaResolver],
  exports: [SessODeTerapiaService],
})
export class SessODeTerapiaModule {}
