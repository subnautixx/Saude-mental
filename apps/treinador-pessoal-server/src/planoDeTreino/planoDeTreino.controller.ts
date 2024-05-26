import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlanoDeTreinoService } from "./planoDeTreino.service";
import { PlanoDeTreinoControllerBase } from "./base/planoDeTreino.controller.base";

@swagger.ApiTags("planoDeTreinos")
@common.Controller("planoDeTreinos")
export class PlanoDeTreinoController extends PlanoDeTreinoControllerBase {
  constructor(protected readonly service: PlanoDeTreinoService) {
    super(service);
  }
}
