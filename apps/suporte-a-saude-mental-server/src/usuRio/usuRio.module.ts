import { Module } from "@nestjs/common";
import { UsuRioModuleBase } from "./base/usuRio.module.base";
import { UsuRioService } from "./usuRio.service";
import { UsuRioController } from "./usuRio.controller";
import { UsuRioResolver } from "./usuRio.resolver";

@Module({
  imports: [UsuRioModuleBase],
  controllers: [UsuRioController],
  providers: [UsuRioService, UsuRioResolver],
  exports: [UsuRioService],
})
export class UsuRioModule {}
