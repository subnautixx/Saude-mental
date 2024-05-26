import { Module } from "@nestjs/common";
import { PlanoDeTreinoModuleBase } from "./base/planoDeTreino.module.base";
import { PlanoDeTreinoService } from "./planoDeTreino.service";
import { PlanoDeTreinoController } from "./planoDeTreino.controller";
import { PlanoDeTreinoResolver } from "./planoDeTreino.resolver";

@Module({
  imports: [PlanoDeTreinoModuleBase],
  controllers: [PlanoDeTreinoController],
  providers: [PlanoDeTreinoService, PlanoDeTreinoResolver],
  exports: [PlanoDeTreinoService],
})
export class PlanoDeTreinoModule {}
