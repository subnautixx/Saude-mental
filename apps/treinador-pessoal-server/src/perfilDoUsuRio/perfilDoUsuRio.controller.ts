import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerfilDoUsuRioService } from "./perfilDoUsuRio.service";
import { PerfilDoUsuRioControllerBase } from "./base/perfilDoUsuRio.controller.base";

@swagger.ApiTags("perfilDoUsuRios")
@common.Controller("perfilDoUsuRios")
export class PerfilDoUsuRioController extends PerfilDoUsuRioControllerBase {
  constructor(protected readonly service: PerfilDoUsuRioService) {
    super(service);
  }
}
