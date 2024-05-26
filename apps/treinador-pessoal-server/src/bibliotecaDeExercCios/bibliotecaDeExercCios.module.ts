import { Module } from "@nestjs/common";
import { BibliotecaDeExercCiosModuleBase } from "./base/bibliotecaDeExercCios.module.base";
import { BibliotecaDeExercCiosService } from "./bibliotecaDeExercCios.service";
import { BibliotecaDeExercCiosController } from "./bibliotecaDeExercCios.controller";
import { BibliotecaDeExercCiosResolver } from "./bibliotecaDeExercCios.resolver";

@Module({
  imports: [BibliotecaDeExercCiosModuleBase],
  controllers: [BibliotecaDeExercCiosController],
  providers: [BibliotecaDeExercCiosService, BibliotecaDeExercCiosResolver],
  exports: [BibliotecaDeExercCiosService],
})
export class BibliotecaDeExercCiosModule {}
