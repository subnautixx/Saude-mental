import { Module } from "@nestjs/common";
import { AvaliaOPessoalModuleBase } from "./base/avaliaOPessoal.module.base";
import { AvaliaOPessoalService } from "./avaliaOPessoal.service";
import { AvaliaOPessoalController } from "./avaliaOPessoal.controller";
import { AvaliaOPessoalResolver } from "./avaliaOPessoal.resolver";

@Module({
  imports: [AvaliaOPessoalModuleBase],
  controllers: [AvaliaOPessoalController],
  providers: [AvaliaOPessoalService, AvaliaOPessoalResolver],
  exports: [AvaliaOPessoalService],
})
export class AvaliaOPessoalModule {}
