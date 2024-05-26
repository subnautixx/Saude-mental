import { Module } from "@nestjs/common";
import { CompartilhamentoSocialModuleBase } from "./base/compartilhamentoSocial.module.base";
import { CompartilhamentoSocialService } from "./compartilhamentoSocial.service";
import { CompartilhamentoSocialController } from "./compartilhamentoSocial.controller";
import { CompartilhamentoSocialResolver } from "./compartilhamentoSocial.resolver";

@Module({
  imports: [CompartilhamentoSocialModuleBase],
  controllers: [CompartilhamentoSocialController],
  providers: [CompartilhamentoSocialService, CompartilhamentoSocialResolver],
  exports: [CompartilhamentoSocialService],
})
export class CompartilhamentoSocialModule {}
