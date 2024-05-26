import { Module } from "@nestjs/common";
import { MetasFitnesModuleBase } from "./base/metasFitnes.module.base";
import { MetasFitnesService } from "./metasFitnes.service";
import { MetasFitnesController } from "./metasFitnes.controller";
import { MetasFitnesResolver } from "./metasFitnes.resolver";

@Module({
  imports: [MetasFitnesModuleBase],
  controllers: [MetasFitnesController],
  providers: [MetasFitnesService, MetasFitnesResolver],
  exports: [MetasFitnesService],
})
export class MetasFitnesModule {}
