import * as graphql from "@nestjs/graphql";
import { PerfilDoUsuRioResolverBase } from "./base/perfilDoUsuRio.resolver.base";
import { PerfilDoUsuRio } from "./base/PerfilDoUsuRio";
import { PerfilDoUsuRioService } from "./perfilDoUsuRio.service";

@graphql.Resolver(() => PerfilDoUsuRio)
export class PerfilDoUsuRioResolver extends PerfilDoUsuRioResolverBase {
  constructor(protected readonly service: PerfilDoUsuRioService) {
    super(service);
  }
}
