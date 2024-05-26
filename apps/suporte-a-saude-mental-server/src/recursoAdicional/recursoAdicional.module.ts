import { Module } from "@nestjs/common";
import { RecursoAdicionalModuleBase } from "./base/recursoAdicional.module.base";
import { RecursoAdicionalService } from "./recursoAdicional.service";
import { RecursoAdicionalController } from "./recursoAdicional.controller";
import { RecursoAdicionalResolver } from "./recursoAdicional.resolver";

@Module({
  imports: [RecursoAdicionalModuleBase],
  controllers: [RecursoAdicionalController],
  providers: [RecursoAdicionalService, RecursoAdicionalResolver],
  exports: [RecursoAdicionalService],
})
export class RecursoAdicionalModule {}
