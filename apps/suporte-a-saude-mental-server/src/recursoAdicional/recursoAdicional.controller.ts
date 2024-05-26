import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecursoAdicionalService } from "./recursoAdicional.service";
import { RecursoAdicionalControllerBase } from "./base/recursoAdicional.controller.base";

@swagger.ApiTags("recursoAdicionals")
@common.Controller("recursoAdicionals")
export class RecursoAdicionalController extends RecursoAdicionalControllerBase {
  constructor(protected readonly service: RecursoAdicionalService) {
    super(service);
  }
}
