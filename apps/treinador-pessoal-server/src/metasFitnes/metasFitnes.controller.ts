import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MetasFitnesService } from "./metasFitnes.service";
import { MetasFitnesControllerBase } from "./base/metasFitnes.controller.base";

@swagger.ApiTags("metasFitnes")
@common.Controller("metasFitnes")
export class MetasFitnesController extends MetasFitnesControllerBase {
  constructor(protected readonly service: MetasFitnesService) {
    super(service);
  }
}
