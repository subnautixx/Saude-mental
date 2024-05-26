import * as graphql from "@nestjs/graphql";
import { ExercCioResolverBase } from "./base/exercCio.resolver.base";
import { ExercCio } from "./base/ExercCio";
import { ExercCioService } from "./exercCio.service";

@graphql.Resolver(() => ExercCio)
export class ExercCioResolver extends ExercCioResolverBase {
  constructor(protected readonly service: ExercCioService) {
    super(service);
  }
}
