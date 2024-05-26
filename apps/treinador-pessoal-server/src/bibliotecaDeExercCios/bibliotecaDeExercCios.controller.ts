import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BibliotecaDeExercCiosService } from "./bibliotecaDeExercCios.service";
import { BibliotecaDeExercCiosControllerBase } from "./base/bibliotecaDeExercCios.controller.base";

@swagger.ApiTags("bibliotecaDeExercCios")
@common.Controller("bibliotecaDeExercCios")
export class BibliotecaDeExercCiosController extends BibliotecaDeExercCiosControllerBase {
  constructor(protected readonly service: BibliotecaDeExercCiosService) {
    super(service);
  }
}
