import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SessODeMeditaOGuiadaService } from "./sessODeMeditaOGuiada.service";
import { SessODeMeditaOGuiadaControllerBase } from "./base/sessODeMeditaOGuiada.controller.base";

@swagger.ApiTags("sessODeMeditaOGuiadas")
@common.Controller("sessODeMeditaOGuiadas")
export class SessODeMeditaOGuiadaController extends SessODeMeditaOGuiadaControllerBase {
  constructor(protected readonly service: SessODeMeditaOGuiadaService) {
    super(service);
  }
}
