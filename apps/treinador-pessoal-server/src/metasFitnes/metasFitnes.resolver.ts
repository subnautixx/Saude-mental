import * as graphql from "@nestjs/graphql";
import { MetasFitnesResolverBase } from "./base/metasFitnes.resolver.base";
import { MetasFitnes } from "./base/MetasFitnes";
import { MetasFitnesService } from "./metasFitnes.service";

@graphql.Resolver(() => MetasFitnes)
export class MetasFitnesResolver extends MetasFitnesResolverBase {
  constructor(protected readonly service: MetasFitnesService) {
    super(service);
  }
}
