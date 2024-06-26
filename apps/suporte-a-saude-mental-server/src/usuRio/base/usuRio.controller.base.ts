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
import { UsuRioService } from "../usuRio.service";
import { UsuRioCreateInput } from "./UsuRioCreateInput";
import { UsuRio } from "./UsuRio";
import { UsuRioFindManyArgs } from "./UsuRioFindManyArgs";
import { UsuRioWhereUniqueInput } from "./UsuRioWhereUniqueInput";
import { UsuRioUpdateInput } from "./UsuRioUpdateInput";
import { AvaliaOPessoalFindManyArgs } from "../../avaliaOPessoal/base/AvaliaOPessoalFindManyArgs";
import { AvaliaOPessoal } from "../../avaliaOPessoal/base/AvaliaOPessoal";
import { AvaliaOPessoalWhereUniqueInput } from "../../avaliaOPessoal/base/AvaliaOPessoalWhereUniqueInput";
import { MeditaOFindManyArgs } from "../../meditaO/base/MeditaOFindManyArgs";
import { MeditaO } from "../../meditaO/base/MeditaO";
import { MeditaOWhereUniqueInput } from "../../meditaO/base/MeditaOWhereUniqueInput";
import { RecomendaOFindManyArgs } from "../../recomendaO/base/RecomendaOFindManyArgs";
import { RecomendaO } from "../../recomendaO/base/RecomendaO";
import { RecomendaOWhereUniqueInput } from "../../recomendaO/base/RecomendaOWhereUniqueInput";
import { RecursoAdicionalFindManyArgs } from "../../recursoAdicional/base/RecursoAdicionalFindManyArgs";
import { RecursoAdicional } from "../../recursoAdicional/base/RecursoAdicional";
import { RecursoAdicionalWhereUniqueInput } from "../../recursoAdicional/base/RecursoAdicionalWhereUniqueInput";
import { SessODeMeditaOGuiadaFindManyArgs } from "../../sessODeMeditaOGuiada/base/SessODeMeditaOGuiadaFindManyArgs";
import { SessODeMeditaOGuiada } from "../../sessODeMeditaOGuiada/base/SessODeMeditaOGuiada";
import { SessODeMeditaOGuiadaWhereUniqueInput } from "../../sessODeMeditaOGuiada/base/SessODeMeditaOGuiadaWhereUniqueInput";
import { SessODeTerapiaFindManyArgs } from "../../sessODeTerapia/base/SessODeTerapiaFindManyArgs";
import { SessODeTerapia } from "../../sessODeTerapia/base/SessODeTerapia";
import { SessODeTerapiaWhereUniqueInput } from "../../sessODeTerapia/base/SessODeTerapiaWhereUniqueInput";

export class UsuRioControllerBase {
  constructor(protected readonly service: UsuRioService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UsuRio })
  async createUsuRio(@common.Body() data: UsuRioCreateInput): Promise<UsuRio> {
    return await this.service.createUsuRio({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        idade: true,
        nome: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UsuRio] })
  @ApiNestedQuery(UsuRioFindManyArgs)
  async usuRios(@common.Req() request: Request): Promise<UsuRio[]> {
    const args = plainToClass(UsuRioFindManyArgs, request.query);
    return this.service.usuRios({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        idade: true,
        nome: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UsuRio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async usuRio(
    @common.Param() params: UsuRioWhereUniqueInput
  ): Promise<UsuRio | null> {
    const result = await this.service.usuRio({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        idade: true,
        nome: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: UsuRio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUsuRio(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() data: UsuRioUpdateInput
  ): Promise<UsuRio | null> {
    try {
      return await this.service.updateUsuRio({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          idade: true,
          nome: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: UsuRio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUsuRio(
    @common.Param() params: UsuRioWhereUniqueInput
  ): Promise<UsuRio | null> {
    try {
      return await this.service.deleteUsuRio({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          idade: true,
          nome: true,
          updatedAt: true,
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

  @common.Get("/:id/avaliaOPessoals")
  @ApiNestedQuery(AvaliaOPessoalFindManyArgs)
  async findAvaliaOPessoals(
    @common.Req() request: Request,
    @common.Param() params: UsuRioWhereUniqueInput
  ): Promise<AvaliaOPessoal[]> {
    const query = plainToClass(AvaliaOPessoalFindManyArgs, request.query);
    const results = await this.service.findAvaliaOPessoals(params.id, {
      ...query,
      select: {
        avaliaOMentalRegular: true,
        checkInsDiRios: true,
        conteDoPersonalizado: true,
        createdAt: true,
        id: true,
        updatedAt: true,

        usuRio: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/avaliaOPessoals")
  async connectAvaliaOPessoals(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: AvaliaOPessoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      avaliaOPessoals: {
        connect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/avaliaOPessoals")
  async updateAvaliaOPessoals(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: AvaliaOPessoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      avaliaOPessoals: {
        set: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/avaliaOPessoals")
  async disconnectAvaliaOPessoals(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: AvaliaOPessoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      avaliaOPessoals: {
        disconnect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/meditaOs")
  @ApiNestedQuery(MeditaOFindManyArgs)
  async findMeditaOs(
    @common.Req() request: Request,
    @common.Param() params: UsuRioWhereUniqueInput
  ): Promise<MeditaO[]> {
    const query = plainToClass(MeditaOFindManyArgs, request.query);
    const results = await this.service.findMeditaOs(params.id, {
      ...query,
      select: {
        createdAt: true,
        descriO: true,
        duraOMinutos: true,
        id: true,
        nome: true,
        updatedAt: true,

        usuRio: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/meditaOs")
  async connectMeditaOs(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: MeditaOWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meditaOs: {
        connect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/meditaOs")
  async updateMeditaOs(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: MeditaOWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meditaOs: {
        set: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/meditaOs")
  async disconnectMeditaOs(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: MeditaOWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meditaOs: {
        disconnect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/recomendaOs")
  @ApiNestedQuery(RecomendaOFindManyArgs)
  async findRecomendaOs(
    @common.Req() request: Request,
    @common.Param() params: UsuRioWhereUniqueInput
  ): Promise<RecomendaO[]> {
    const query = plainToClass(RecomendaOFindManyArgs, request.query);
    const results = await this.service.findRecomendaOs(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/recomendaOs")
  async connectRecomendaOs(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: RecomendaOWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recomendaOs: {
        connect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/recomendaOs")
  async updateRecomendaOs(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: RecomendaOWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recomendaOs: {
        set: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/recomendaOs")
  async disconnectRecomendaOs(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: RecomendaOWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recomendaOs: {
        disconnect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/recursoAdicionals")
  @ApiNestedQuery(RecursoAdicionalFindManyArgs)
  async findRecursoAdicionals(
    @common.Req() request: Request,
    @common.Param() params: UsuRioWhereUniqueInput
  ): Promise<RecursoAdicional[]> {
    const query = plainToClass(RecursoAdicionalFindManyArgs, request.query);
    const results = await this.service.findRecursoAdicionals(params.id, {
      ...query,
      select: {
        createdAt: true,
        descriO: true,
        id: true,
        link: true,
        nomeDoRecurso: true,
        tipoDeRecurso: true,
        updatedAt: true,

        usuRio: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/recursoAdicionals")
  async connectRecursoAdicionals(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: RecursoAdicionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recursoAdicionals: {
        connect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/recursoAdicionals")
  async updateRecursoAdicionals(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: RecursoAdicionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recursoAdicionals: {
        set: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/recursoAdicionals")
  async disconnectRecursoAdicionals(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: RecursoAdicionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recursoAdicionals: {
        disconnect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/sessODeMeditaOGuiadas")
  @ApiNestedQuery(SessODeMeditaOGuiadaFindManyArgs)
  async findSessODeMeditaOGuiadas(
    @common.Req() request: Request,
    @common.Param() params: UsuRioWhereUniqueInput
  ): Promise<SessODeMeditaOGuiada[]> {
    const query = plainToClass(SessODeMeditaOGuiadaFindManyArgs, request.query);
    const results = await this.service.findSessODeMeditaOGuiadas(params.id, {
      ...query,
      select: {
        createdAt: true,
        duraO: true,
        id: true,
        nome: true,
        objetivo: true,
        tipo: true,
        updatedAt: true,

        usuRio: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sessODeMeditaOGuiadas")
  async connectSessODeMeditaOGuiadas(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: SessODeMeditaOGuiadaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessODeMeditaOGuiadas: {
        connect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sessODeMeditaOGuiadas")
  async updateSessODeMeditaOGuiadas(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: SessODeMeditaOGuiadaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessODeMeditaOGuiadas: {
        set: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sessODeMeditaOGuiadas")
  async disconnectSessODeMeditaOGuiadas(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: SessODeMeditaOGuiadaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessODeMeditaOGuiadas: {
        disconnect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/sessODeTerapias")
  @ApiNestedQuery(SessODeTerapiaFindManyArgs)
  async findSessODeTerapias(
    @common.Req() request: Request,
    @common.Param() params: UsuRioWhereUniqueInput
  ): Promise<SessODeTerapia[]> {
    const query = plainToClass(SessODeTerapiaFindManyArgs, request.query);
    const results = await this.service.findSessODeTerapias(params.id, {
      ...query,
      select: {
        createdAt: true,
        data: true,
        id: true,
        notas: true,
        tipo: true,
        updatedAt: true,

        usuRio: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sessODeTerapias")
  async connectSessODeTerapias(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: SessODeTerapiaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessODeTerapias: {
        connect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sessODeTerapias")
  async updateSessODeTerapias(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: SessODeTerapiaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessODeTerapias: {
        set: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sessODeTerapias")
  async disconnectSessODeTerapias(
    @common.Param() params: UsuRioWhereUniqueInput,
    @common.Body() body: SessODeTerapiaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessODeTerapias: {
        disconnect: body,
      },
    };
    await this.service.updateUsuRio({
      where: params,
      data,
      select: { id: true },
    });
  }
}
