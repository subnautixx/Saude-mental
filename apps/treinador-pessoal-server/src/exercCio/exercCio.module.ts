import { Module } from "@nestjs/common";
import { ExercCioModuleBase } from "./base/exercCio.module.base";
import { ExercCioService } from "./exercCio.service";
import { ExercCioController } from "./exercCio.controller";
import { ExercCioResolver } from "./exercCio.resolver";

@Module({
  imports: [ExercCioModuleBase],
  controllers: [ExercCioController],
  providers: [ExercCioService, ExercCioResolver],
  exports: [ExercCioService],
})
export class ExercCioModule {}
