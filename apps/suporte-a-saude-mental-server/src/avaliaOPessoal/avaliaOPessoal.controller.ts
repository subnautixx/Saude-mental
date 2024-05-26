import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AvaliaOPessoalService } from "./avaliaOPessoal.service";
import { AvaliaOPessoalControllerBase } from "./base/avaliaOPessoal.controller.base";

@swagger.ApiTags("avaliaOPessoals")
@common.Controller("avaliaOPessoals")
export class AvaliaOPessoalController extends AvaliaOPessoalControllerBase {
  constructor(protected readonly service: AvaliaOPessoalService) {
    super(service);
  }
}
