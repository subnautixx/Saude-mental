/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RecomendaOService } from "../recomendaO.service";
import { RecomendaOCreateInput } from "./RecomendaOCreateInput";
import { RecomendaO } from "./RecomendaO";
import { RecomendaOFindManyArgs } from "./RecomendaOFindManyArgs";
import { RecomendaOWhereUniqueInput } from "./RecomendaOWhereUniqueInput";
import { RecomendaOUpdateInput } from "./RecomendaOUpdateInput";

export class RecomendaOControllerBase {
  constructor(protected readonly service: RecomendaOService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RecomendaO })
  async createRecomendaO(
    @common.Body() data: RecomendaOCreateInput
  ): Promise<RecomendaO> {
    return await this.service.createRecomendaO({
      data: {
        ...data,

        usuRio: data.usuRio
          ? {
              connect: data.usuRio,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        descriO: true,
        id: true,
        tipo: true,
        tTulo: true,
        updatedAt: true,

        usuRio: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RecomendaO] })
  @ApiNestedQuery(RecomendaOFindManyArgs)
  async recomendaOS(@common.Req() request: Request): Promise<RecomendaO[]> {
    const args = plainToClass(RecomendaOFindManyArgs, request.query);
    return this.service.recomendaOS({
      ...args,
      select: {
        createdAt: true,
        descriO: true,
        id: true,
        tipo: true,
        tTulo: true,
        updatedAt: true,

        usuRio: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RecomendaO })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async recomendaO(
    @common.Param() params: RecomendaOWhereUniqueInput
  ): Promise<RecomendaO | null> {
    const result = await this.service.recomendaO({
      where: params,
      select: {
        createdAt: true,
        descriO: true,
        id: true,
        tipo: true,
        tTulo: true,
        updatedAt: true,

        usuRio: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RecomendaO })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRecomendaO(
    @common.Param() params: RecomendaOWhereUniqueInput,
    @common.Body() data: RecomendaOUpdateInput
  ): Promise<RecomendaO | null> {
    try {
      return await this.service.updateRecomendaO({
        where: params,
        data: {
          ...data,

          usuRio: data.usuRio
            ? {
                connect: data.usuRio,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          descriO: true,
          id: true,
          tipo: true,
          tTulo: true,
          updatedAt: true,

          usuRio: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RecomendaO })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRecomendaO(
    @common.Param() params: RecomendaOWhereUniqueInput
  ): Promise<RecomendaO | null> {
    try {
      return await this.service.deleteRecomendaO({
        where: params,
        select: {
          createdAt: true,
          descriO: true,
          id: true,
          tipo: true,
          tTulo: true,
          updatedAt: true,

          usuRio: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
