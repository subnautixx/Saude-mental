import * as graphql from "@nestjs/graphql";
import { SessODeTerapiaResolverBase } from "./base/sessODeTerapia.resolver.base";
import { SessODeTerapia } from "./base/SessODeTerapia";
import { SessODeTerapiaService } from "./sessODeTerapia.service";

@graphql.Resolver(() => SessODeTerapia)
export class SessODeTerapiaResolver extends SessODeTerapiaResolverBase {
  constructor(protected readonly service: SessODeTerapiaService) {
    super(service);
  }
}
