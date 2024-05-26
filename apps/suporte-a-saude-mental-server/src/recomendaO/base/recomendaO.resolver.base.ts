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
import { RecomendaO } from "./RecomendaO";
import { RecomendaOCountArgs } from "./RecomendaOCountArgs";
import { RecomendaOFindManyArgs } from "./RecomendaOFindManyArgs";
import { RecomendaOFindUniqueArgs } from "./RecomendaOFindUniqueArgs";
import { CreateRecomendaOArgs } from "./CreateRecomendaOArgs";
import { UpdateRecomendaOArgs } from "./UpdateRecomendaOArgs";
import { DeleteRecomendaOArgs } from "./DeleteRecomendaOArgs";
import { UsuRio } from "../../usuRio/base/UsuRio";
import { RecomendaOService } from "../recomendaO.service";
@graphql.Resolver(() => RecomendaO)
export class RecomendaOResolverBase {
  constructor(protected readonly service: RecomendaOService) {}

  async _recomendaOSMeta(
    @graphql.Args() args: RecomendaOCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RecomendaO])
  async recomendaOS(
    @graphql.Args() args: RecomendaOFindManyArgs
  ): Promise<RecomendaO[]> {
    return this.service.recomendaOS(args);
  }

  @graphql.Query(() => RecomendaO, { nullable: true })
  async recomendaO(
    @graphql.Args() args: RecomendaOFindUniqueArgs
  ): Promise<RecomendaO | null> {
    const result = await this.service.recomendaO(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RecomendaO)
  async createRecomendaO(
    @graphql.Args() args: CreateRecomendaOArgs
  ): Promise<RecomendaO> {
    return await this.service.createRecomendaO({
      ...args,
      data: {
        ...args.data,

        usuRio: args.data.usuRio
          ? {
              connect: args.data.usuRio,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => RecomendaO)
  async updateRecomendaO(
    @graphql.Args() args: UpdateRecomendaOArgs
  ): Promise<RecomendaO | null> {
    try {
      return await this.service.updateRecomendaO({
        ...args,
        data: {
          ...args.data,

          usuRio: args.data.usuRio
            ? {
                connect: args.data.usuRio,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => RecomendaO)
  async deleteRecomendaO(
    @graphql.Args() args: DeleteRecomendaOArgs
  ): Promise<RecomendaO | null> {
    try {
      return await this.service.deleteRecomendaO(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => UsuRio, {
    nullable: true,
    name: "usuRio",
  })
  async getUsuRio(
    @graphql.Parent() parent: RecomendaO
  ): Promise<UsuRio | null> {
    const result = await this.service.getUsuRio(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}