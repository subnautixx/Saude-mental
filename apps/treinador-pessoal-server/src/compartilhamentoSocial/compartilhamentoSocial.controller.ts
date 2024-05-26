import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompartilhamentoSocialService } from "./compartilhamentoSocial.service";
import { CompartilhamentoSocialControllerBase } from "./base/compartilhamentoSocial.controller.base";

@swagger.ApiTags("compartilhamentoSocials")
@common.Controller("compartilhamentoSocials")
export class CompartilhamentoSocialController extends CompartilhamentoSocialControllerBase {
  constructor(protected readonly service: CompartilhamentoSocialService) {
    super(service);
  }
}
