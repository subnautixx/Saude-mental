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
  RecursoAdicional as PrismaRecursoAdicional,
  UsuRio as PrismaUsuRio,
} from "@prisma/client";

export class RecursoAdicionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RecursoAdicionalCountArgs, "select">
  ): Promise<number> {
    return this.prisma.recursoAdicional.count(args);
  }

  async recursoAdicionals<T extends Prisma.RecursoAdicionalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecursoAdicionalFindManyArgs>
  ): Promise<PrismaRecursoAdicional[]> {
    return this.prisma.recursoAdicional.findMany<Prisma.RecursoAdicionalFindManyArgs>(
      args
    );
  }
  async recursoAdicional<T extends Prisma.RecursoAdicionalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecursoAdicionalFindUniqueArgs>
  ): Promise<PrismaRecursoAdicional | null> {
    return this.prisma.recursoAdicional.findUnique(args);
  }
  async createRecursoAdicional<T extends Prisma.RecursoAdicionalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecursoAdicionalCreateArgs>
  ): Promise<PrismaRecursoAdicional> {
    return this.prisma.recursoAdicional.create<T>(args);
  }
  async updateRecursoAdicional<T extends Prisma.RecursoAdicionalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecursoAdicionalUpdateArgs>
  ): Promise<PrismaRecursoAdicional> {
    return this.prisma.recursoAdicional.update<T>(args);
  }
  async deleteRecursoAdicional<T extends Prisma.RecursoAdicionalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecursoAdicionalDeleteArgs>
  ): Promise<PrismaRecursoAdicional> {
    return this.prisma.recursoAdicional.delete(args);
  }

  async getUsuRio(parentId: string): Promise<PrismaUsuRio | null> {
    return this.prisma.recursoAdicional
      .findUnique({
        where: { id: parentId },
      })
      .usuRio();
  }
}
