import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RealizaEsERecompensasService } from "./realizaEsERecompensas.service";
import { RealizaEsERecompensasControllerBase } from "./base/realizaEsERecompensas.controller.base";

@swagger.ApiTags("realizaEsERecompensas")
@common.Controller("realizaEsERecompensas")
export class RealizaEsERecompensasController extends RealizaEsERecompensasControllerBase {
  constructor(protected readonly service: RealizaEsERecompensasService) {
    super(service);
  }
}
