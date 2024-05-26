import { Module } from "@nestjs/common";
import { PerfilDoUsuRioModuleBase } from "./base/perfilDoUsuRio.module.base";
import { PerfilDoUsuRioService } from "./perfilDoUsuRio.service";
import { PerfilDoUsuRioController } from "./perfilDoUsuRio.controller";
import { PerfilDoUsuRioResolver } from "./perfilDoUsuRio.resolver";

@Module({
  imports: [PerfilDoUsuRioModuleBase],
  controllers: [PerfilDoUsuRioController],
  providers: [PerfilDoUsuRioService, PerfilDoUsuRioResolver],
  exports: [PerfilDoUsuRioService],
})
export class PerfilDoUsuRioModule {}
