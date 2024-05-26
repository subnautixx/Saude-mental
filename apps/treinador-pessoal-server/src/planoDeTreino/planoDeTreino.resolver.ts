import * as graphql from "@nestjs/graphql";
import { PlanoDeTreinoResolverBase } from "./base/planoDeTreino.resolver.base";
import { PlanoDeTreino } from "./base/PlanoDeTreino";
import { PlanoDeTreinoService } from "./planoDeTreino.service";

@graphql.Resolver(() => PlanoDeTreino)
export class PlanoDeTreinoResolver extends PlanoDeTreinoResolverBase {
  constructor(protected readonly service: PlanoDeTreinoService) {
    super(service);
  }
}
