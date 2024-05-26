import * as graphql from "@nestjs/graphql";
import { UsuRioResolverBase } from "./base/usuRio.resolver.base";
import { UsuRio } from "./base/UsuRio";
import { UsuRioService } from "./usuRio.service";

@graphql.Resolver(() => UsuRio)
export class UsuRioResolver extends UsuRioResolverBase {
  constructor(protected readonly service: UsuRioService) {
    super(service);
  }
}
