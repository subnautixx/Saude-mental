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
  CompartilhamentoSocial as PrismaCompartilhamentoSocial,
  UsuRio as PrismaUsuRio,
} from "@prisma/client";

export class CompartilhamentoSocialServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CompartilhamentoSocialCountArgs, "select">
  ): Promise<number> {
    return this.prisma.compartilhamentoSocial.count(args);
  }

  async compartilhamentoSocials<
    T extends Prisma.CompartilhamentoSocialFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.CompartilhamentoSocialFindManyArgs>
  ): Promise<PrismaCompartilhamentoSocial[]> {
    return this.prisma.compartilhamentoSocial.findMany<Prisma.CompartilhamentoSocialFindManyArgs>(
      args
    );
  }
  async compartilhamentoSocial<
    T extends Prisma.CompartilhamentoSocialFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.CompartilhamentoSocialFindUniqueArgs>
  ): Promise<PrismaCompartilhamentoSocial | null> {
    return this.prisma.compartilhamentoSocial.findUnique(args);
  }
  async createCompartilhamentoSocial<
    T extends Prisma.CompartilhamentoSocialCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.CompartilhamentoSocialCreateArgs>
  ): Promise<PrismaCompartilhamentoSocial> {
    return this.prisma.compartilhamentoSocial.create<T>(args);
  }
  async updateCompartilhamentoSocial<
    T extends Prisma.CompartilhamentoSocialUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.CompartilhamentoSocialUpdateArgs>
  ): Promise<PrismaCompartilhamentoSocial> {
    return this.prisma.compartilhamentoSocial.update<T>(args);
  }
  async deleteCompartilhamentoSocial<
    T extends Prisma.CompartilhamentoSocialDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.CompartilhamentoSocialDeleteArgs>
  ): Promise<PrismaCompartilhamentoSocial> {
    return this.prisma.compartilhamentoSocial.delete(args);
  }

  async getUsuRio(parentId: string): Promise<PrismaUsuRio | null> {
    return this.prisma.compartilhamentoSocial
      .findUnique({
        where: { id: parentId },
      })
      .usuRio();
  }
}