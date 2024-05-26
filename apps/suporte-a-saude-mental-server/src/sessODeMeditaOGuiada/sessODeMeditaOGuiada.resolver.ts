import * as graphql from "@nestjs/graphql";
import { SessODeMeditaOGuiadaResolverBase } from "./base/sessODeMeditaOGuiada.resolver.base";
import { SessODeMeditaOGuiada } from "./base/SessODeMeditaOGuiada";
import { SessODeMeditaOGuiadaService } from "./sessODeMeditaOGuiada.service";

@graphql.Resolver(() => SessODeMeditaOGuiada)
export class SessODeMeditaOGuiadaResolver extends SessODeMeditaOGuiadaResolverBase {
  constructor(protected readonly service: SessODeMeditaOGuiadaService) {
    super(service);
  }
}
