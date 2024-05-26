import * as graphql from "@nestjs/graphql";
import { DesempenhoDoUsuRioResolverBase } from "./base/desempenhoDoUsuRio.resolver.base";
import { DesempenhoDoUsuRio } from "./base/DesempenhoDoUsuRio";
import { DesempenhoDoUsuRioService } from "./desempenhoDoUsuRio.service";

@graphql.Resolver(() => DesempenhoDoUsuRio)
export class DesempenhoDoUsuRioResolver extends DesempenhoDoUsuRioResolverBase {
  constructor(protected readonly service: DesempenhoDoUsuRioService) {
    super(service);
  }
}
