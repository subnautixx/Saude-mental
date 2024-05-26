/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PerfilDoUsuRio } from "./PerfilDoUsuRio";
import { PerfilDoUsuRioCountArgs } from "./PerfilDoUsuRioCountArgs";
import { PerfilDoUsuRioFindManyArgs } from "./PerfilDoUsuRioFindManyArgs";
import { PerfilDoUsuRioFindUniqueArgs } from "./PerfilDoUsuRioFindUniqueArgs";
import { CreatePerfilDoUsuRioArgs } from "./CreatePerfilDoUsuRioArgs";
import { UpdatePerfilDoUsuRioArgs } from "./UpdatePerfilDoUsuRioArgs";
import { DeletePerfilDoUsuRioArgs } from "./DeletePerfilDoUsuRioArgs";
import { PerfilDoUsuRioService } from "../perfilDoUsuRio.service";
@graphql.Resolver(() => PerfilDoUsuRio)
export class PerfilDoUsuRioResolverBase {
  constructor(protected readonly service: PerfilDoUsuRioService) {}

  async _perfilDoUsuRiosMeta(
    @graphql.Args() args: PerfilDoUsuRioCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PerfilDoUsuRio])
  async perfilDoUsuRios(
    @graphql.Args() args: PerfilDoUsuRioFindManyArgs
  ): Promise<PerfilDoUsuRio[]> {
    return this.service.perfilDoUsuRios(args);
  }

  @graphql.Query(() => PerfilDoUsuRio, { nullable: true })
  async perfilDoUsuRio(
    @graphql.Args() args: PerfilDoUsuRioFindUniqueArgs
  ): Promise<PerfilDoUsuRio | null> {
    const result = await this.service.perfilDoUsuRio(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PerfilDoUsuRio)
  async createPerfilDoUsuRio(
    @graphql.Args() args: CreatePerfilDoUsuRioArgs
  ): Promise<PerfilDoUsuRio> {
    return await this.service.createPerfilDoUsuRio({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PerfilDoUsuRio)
  async updatePerfilDoUsuRio(
    @graphql.Args() args: UpdatePerfilDoUsuRioArgs
  ): Promise<PerfilDoUsuRio | null> {
    try {
      return await this.service.updatePerfilDoUsuRio({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PerfilDoUsuRio)
  async deletePerfilDoUsuRio(
    @graphql.Args() args: DeletePerfilDoUsuRioArgs
  ): Promise<PerfilDoUsuRio | null> {
    try {
      return await this.service.deletePerfilDoUsuRio(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}