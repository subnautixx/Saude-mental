import * as graphql from "@nestjs/graphql";
import { CompartilhamentoSocialResolverBase } from "./base/compartilhamentoSocial.resolver.base";
import { CompartilhamentoSocial } from "./base/CompartilhamentoSocial";
import { CompartilhamentoSocialService } from "./compartilhamentoSocial.service";

@graphql.Resolver(() => CompartilhamentoSocial)
export class CompartilhamentoSocialResolver extends CompartilhamentoSocialResolverBase {
  constructor(protected readonly service: CompartilhamentoSocialService) {
    super(service);
  }
}
