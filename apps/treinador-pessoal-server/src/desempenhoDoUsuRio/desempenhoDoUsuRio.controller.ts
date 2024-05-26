import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DesempenhoDoUsuRioService } from "./desempenhoDoUsuRio.service";
import { DesempenhoDoUsuRioControllerBase } from "./base/desempenhoDoUsuRio.controller.base";

@swagger.ApiTags("desempenhoDoUsuRios")
@common.Controller("desempenhoDoUsuRios")
export class DesempenhoDoUsuRioController extends DesempenhoDoUsuRioControllerBase {
  constructor(protected readonly service: DesempenhoDoUsuRioService) {
    super(service);
  }
}
