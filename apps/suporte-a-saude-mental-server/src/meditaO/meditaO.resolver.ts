import * as graphql from "@nestjs/graphql";
import { MeditaOResolverBase } from "./base/meditaO.resolver.base";
import { MeditaO } from "./base/MeditaO";
import { MeditaOService } from "./meditaO.service";

@graphql.Resolver(() => MeditaO)
export class MeditaOResolver extends MeditaOResolverBase {
  constructor(protected readonly service: MeditaOService) {
    super(service);
  }
}
