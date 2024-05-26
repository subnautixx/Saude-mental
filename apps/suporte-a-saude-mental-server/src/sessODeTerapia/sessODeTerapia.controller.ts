import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SessODeTerapiaService } from "./sessODeTerapia.service";
import { SessODeTerapiaControllerBase } from "./base/sessODeTerapia.controller.base";

@swagger.ApiTags("sessODeTerapias")
@common.Controller("sessODeTerapias")
export class SessODeTerapiaController extends SessODeTerapiaControllerBase {
  constructor(protected readonly service: SessODeTerapiaService) {
    super(service);
  }
}
