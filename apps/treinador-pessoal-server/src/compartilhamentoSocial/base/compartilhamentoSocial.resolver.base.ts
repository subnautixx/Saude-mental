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
import { CompartilhamentoSocial } from "./CompartilhamentoSocial";
import { CompartilhamentoSocialCountArgs } from "./CompartilhamentoSocialCountArgs";
import { CompartilhamentoSocialFindManyArgs } from "./CompartilhamentoSocialFindManyArgs";
import { CompartilhamentoSocialFindUniqueArgs } from "./CompartilhamentoSocialFindUniqueArgs";
import { CreateCompartilhamentoSocialArgs } from "./CreateCompartilhamentoSocialArgs";
import { UpdateCompartilhamentoSocialArgs } from "./UpdateCompartilhamentoSocialArgs";
import { DeleteCompartilhamentoSocialArgs } from "./DeleteCompartilhamentoSocialArgs";
import { UsuRio } from "../../usuRio/base/UsuRio";
import { CompartilhamentoSocialService } from "../compartilhamentoSocial.service";
@graphql.Resolver(() => CompartilhamentoSocial)
export class CompartilhamentoSocialResolverBase {
  constructor(protected readonly service: CompartilhamentoSocialService) {}

  async _compartilhamentoSocialsMeta(
    @graphql.Args() args: CompartilhamentoSocialCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CompartilhamentoSocial])
  async compartilhamentoSocials(
    @graphql.Args() args: CompartilhamentoSocialFindManyArgs
  ): Promise<CompartilhamentoSocial[]> {
    return this.service.compartilhamentoSocials(args);
  }

  @graphql.Query(() => CompartilhamentoSocial, { nullable: true })
  async compartilhamentoSocial(
    @graphql.Args() args: CompartilhamentoSocialFindUniqueArgs
  ): Promise<CompartilhamentoSocial | null> {
    const result = await this.service.compartilhamentoSocial(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CompartilhamentoSocial)
  async createCompartilhamentoSocial(
    @graphql.Args() args: CreateCompartilhamentoSocialArgs
  ): Promise<CompartilhamentoSocial> {
    return await this.service.createCompartilhamentoSocial({
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

  @graphql.Mutation(() => CompartilhamentoSocial)
  async updateCompartilhamentoSocial(
    @graphql.Args() args: UpdateCompartilhamentoSocialArgs
  ): Promise<CompartilhamentoSocial | null> {
    try {
      return await this.service.updateCompartilhamentoSocial({
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

  @graphql.Mutation(() => CompartilhamentoSocial)
  async deleteCompartilhamentoSocial(
    @graphql.Args() args: DeleteCompartilhamentoSocialArgs
  ): Promise<CompartilhamentoSocial | null> {
    try {
      return await this.service.deleteCompartilhamentoSocial(args);
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
    @graphql.Parent() parent: CompartilhamentoSocial
  ): Promise<UsuRio | null> {
    const result = await this.service.getUsuRio(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}