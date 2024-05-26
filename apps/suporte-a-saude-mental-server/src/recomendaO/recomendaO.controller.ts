import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecomendaOService } from "./recomendaO.service";
import { RecomendaOControllerBase } from "./base/recomendaO.controller.base";

@swagger.ApiTags("recomendaOs")
@common.Controller("recomendaOs")
export class RecomendaOController extends RecomendaOControllerBase {
  constructor(protected readonly service: RecomendaOService) {
    super(service);
  }
}
