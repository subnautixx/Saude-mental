import * as graphql from "@nestjs/graphql";
import { BibliotecaDeExercCiosResolverBase } from "./base/bibliotecaDeExercCios.resolver.base";
import { BibliotecaDeExercCios } from "./base/BibliotecaDeExercCios";
import { BibliotecaDeExercCiosService } from "./bibliotecaDeExercCios.service";

@graphql.Resolver(() => BibliotecaDeExercCios)
export class BibliotecaDeExercCiosResolver extends BibliotecaDeExercCiosResolverBase {
  constructor(protected readonly service: BibliotecaDeExercCiosService) {
    super(service);
  }
}
