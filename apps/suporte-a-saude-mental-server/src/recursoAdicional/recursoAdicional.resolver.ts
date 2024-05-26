import * as graphql from "@nestjs/graphql";
import { RecursoAdicionalResolverBase } from "./base/recursoAdicional.resolver.base";
import { RecursoAdicional } from "./base/RecursoAdicional";
import { RecursoAdicionalService } from "./recursoAdicional.service";

@graphql.Resolver(() => RecursoAdicional)
export class RecursoAdicionalResolver extends RecursoAdicionalResolverBase {
  constructor(protected readonly service: RecursoAdicionalService) {
    super(service);
  }
}
