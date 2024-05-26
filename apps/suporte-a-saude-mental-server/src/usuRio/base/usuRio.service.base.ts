/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UsuRio as PrismaUsuRio,
  AvaliaOPessoal as PrismaAvaliaOPessoal,
  MeditaO as PrismaMeditaO,
  RecomendaO as PrismaRecomendaO,
  RecursoAdicional as PrismaRecursoAdicional,
  SessODeMeditaOGuiada as PrismaSessODeMeditaOGuiada,
  SessODeTerapia as PrismaSessODeTerapia,
} from "@prisma/client";

export class UsuRioServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UsuRioCountArgs, "select">): Promise<number> {
    return this.prisma.usuRio.count(args);
  }

  async usuRios<T extends Prisma.UsuRioFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsuRioFindManyArgs>
  ): Promise<PrismaUsuRio[]> {
    return this.prisma.usuRio.findMany<Prisma.UsuRioFindManyArgs>(args);
  }
  async usuRio<T extends Prisma.UsuRioFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsuRioFindUniqueArgs>
  ): Promise<PrismaUsuRio | null> {
    return this.prisma.usuRio.findUnique(args);
  }
  async createUsuRio<T extends Prisma.UsuRioCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsuRioCreateArgs>
  ): Promise<PrismaUsuRio> {
    return this.prisma.usuRio.create<T>(args);
  }
  async updateUsuRio<T extends Prisma.UsuRioUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsuRioUpdateArgs>
  ): Promise<PrismaUsuRio> {
    return this.prisma.usuRio.update<T>(args);
  }
  async deleteUsuRio<T extends Prisma.UsuRioDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsuRioDeleteArgs>
  ): Promise<PrismaUsuRio> {
    return this.prisma.usuRio.delete(args);
  }

  async findAvaliaOPessoals(
    parentId: string,
    args: Prisma.AvaliaOPessoalFindManyArgs
  ): Promise<PrismaAvaliaOPessoal[]> {
    return this.prisma.usuRio
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .avaliaOPessoals(args);
  }

  async findMeditaOs(
    parentId: string,
    args: Prisma.MeditaOFindManyArgs
  ): Promise<PrismaMeditaO[]> {
    return this.prisma.usuRio
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .meditaOs(args);
  }

  async findRecomendaOs(
    parentId: string,
    args: Prisma.RecomendaOFindManyArgs
  ): Promise<PrismaRecomendaO[]> {
    return this.prisma.usuRio
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .recomendaOs(args);
  }

  async findRecursoAdicionals(
    parentId: string,
    args: Prisma.RecursoAdicionalFindManyArgs
  ): Promise<PrismaRecursoAdicional[]> {
    return this.prisma.usuRio
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .recursoAdicionals(args);
  }

  async findSessODeMeditaOGuiadas(
    parentId: string,
    args: Prisma.SessODeMeditaOGuiadaFindManyArgs
  ): Promise<PrismaSessODeMeditaOGuiada[]> {
    return this.prisma.usuRio
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sessODeMeditaOGuiadas(args);
  }

  async findSessODeTerapias(
    parentId: string,
    args: Prisma.SessODeTerapiaFindManyArgs
  ): Promise<PrismaSessODeTerapia[]> {
    return this.prisma.usuRio
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sessODeTerapias(args);
  }
}