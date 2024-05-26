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
  BibliotecaDeExercCios as PrismaBibliotecaDeExercCios,
} from "@prisma/client";

export class BibliotecaDeExercCiosServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BibliotecaDeExercCiosCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bibliotecaDeExercCios.count(args);
  }

  async bibliotecaDeExercCiosItems<
    T extends Prisma.BibliotecaDeExercCiosFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.BibliotecaDeExercCiosFindManyArgs>
  ): Promise<PrismaBibliotecaDeExercCios[]> {
    return this.prisma.bibliotecaDeExercCios.findMany<Prisma.BibliotecaDeExercCiosFindManyArgs>(
      args
    );
  }
  async bibliotecaDeExercCios<
    T extends Prisma.BibliotecaDeExercCiosFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.BibliotecaDeExercCiosFindUniqueArgs>
  ): Promise<PrismaBibliotecaDeExercCios | null> {
    return this.prisma.bibliotecaDeExercCios.findUnique(args);
  }
  async createBibliotecaDeExercCios<
    T extends Prisma.BibliotecaDeExercCiosCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.BibliotecaDeExercCiosCreateArgs>
  ): Promise<PrismaBibliotecaDeExercCios> {
    return this.prisma.bibliotecaDeExercCios.create<T>(args);
  }
  async updateBibliotecaDeExercCios<
    T extends Prisma.BibliotecaDeExercCiosUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.BibliotecaDeExercCiosUpdateArgs>
  ): Promise<PrismaBibliotecaDeExercCios> {
    return this.prisma.bibliotecaDeExercCios.update<T>(args);
  }
  async deleteBibliotecaDeExercCios<
    T extends Prisma.BibliotecaDeExercCiosDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.BibliotecaDeExercCiosDeleteArgs>
  ): Promise<PrismaBibliotecaDeExercCios> {
    return this.prisma.bibliotecaDeExercCios.delete(args);
  }
}