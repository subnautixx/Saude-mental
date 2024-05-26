import * as graphql from "@nestjs/graphql";
import { RecomendaOResolverBase } from "./base/recomendaO.resolver.base";
import { RecomendaO } from "./base/RecomendaO";
import { RecomendaOService } from "./recomendaO.service";

@graphql.Resolver(() => RecomendaO)
export class RecomendaOResolver extends RecomendaOResolverBase {
  constructor(protected readonly service: RecomendaOService) {
    super(service);
  }
}
