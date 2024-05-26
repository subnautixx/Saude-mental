import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExercCioService } from "./exercCio.service";
import { ExercCioControllerBase } from "./base/exercCio.controller.base";

@swagger.ApiTags("exercCios")
@common.Controller("exercCios")
export class ExercCioController extends ExercCioControllerBase {
  constructor(protected readonly service: ExercCioService) {
    super(service);
  }
}
