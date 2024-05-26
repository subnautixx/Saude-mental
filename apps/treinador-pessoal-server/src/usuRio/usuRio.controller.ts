import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsuRioService } from "./usuRio.service";
import { UsuRioControllerBase } from "./base/usuRio.controller.base";

@swagger.ApiTags("usuRios")
@common.Controller("usuRios")
export class UsuRioController extends UsuRioControllerBase {
  constructor(protected readonly service: UsuRioService) {
    super(service);
  }
}
