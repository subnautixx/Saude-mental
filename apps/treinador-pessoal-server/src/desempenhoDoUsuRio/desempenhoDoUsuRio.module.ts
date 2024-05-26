import { Module } from "@nestjs/common";
import { DesempenhoDoUsuRioModuleBase } from "./base/desempenhoDoUsuRio.module.base";
import { DesempenhoDoUsuRioService } from "./desempenhoDoUsuRio.service";
import { DesempenhoDoUsuRioController } from "./desempenhoDoUsuRio.controller";
import { DesempenhoDoUsuRioResolver } from "./desempenhoDoUsuRio.resolver";

@Module({
  imports: [DesempenhoDoUsuRioModuleBase],
  controllers: [DesempenhoDoUsuRioController],
  providers: [DesempenhoDoUsuRioService, DesempenhoDoUsuRioResolver],
  exports: [DesempenhoDoUsuRioService],
})
export class DesempenhoDoUsuRioModule {}
