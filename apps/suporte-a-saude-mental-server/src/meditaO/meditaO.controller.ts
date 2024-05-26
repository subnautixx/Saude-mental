import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeditaOService } from "./meditaO.service";
import { MeditaOControllerBase } from "./base/meditaO.controller.base";

@swagger.ApiTags("meditaOs")
@common.Controller("meditaOs")
export class MeditaOController extends MeditaOControllerBase {
  constructor(protected readonly service: MeditaOService) {
    super(service);
  }
}
