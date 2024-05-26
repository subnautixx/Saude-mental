import * as graphql from "@nestjs/graphql";
import { AvaliaOPessoalResolverBase } from "./base/avaliaOPessoal.resolver.base";
import { AvaliaOPessoal } from "./base/AvaliaOPessoal";
import { AvaliaOPessoalService } from "./avaliaOPessoal.service";

@graphql.Resolver(() => AvaliaOPessoal)
export class AvaliaOPessoalResolver extends AvaliaOPessoalResolverBase {
  constructor(protected readonly service: AvaliaOPessoalService) {
    super(service);
  }
}
