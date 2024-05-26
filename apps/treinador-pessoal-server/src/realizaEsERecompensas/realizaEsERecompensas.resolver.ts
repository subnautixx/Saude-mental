import * as graphql from "@nestjs/graphql";
import { RealizaEsERecompensasResolverBase } from "./base/realizaEsERecompensas.resolver.base";
import { RealizaEsERecompensas } from "./base/RealizaEsERecompensas";
import { RealizaEsERecompensasService } from "./realizaEsERecompensas.service";

@graphql.Resolver(() => RealizaEsERecompensas)
export class RealizaEsERecompensasResolver extends RealizaEsERecompensasResolverBase {
  constructor(protected readonly service: RealizaEsERecompensasService) {
    super(service);
  }
}
