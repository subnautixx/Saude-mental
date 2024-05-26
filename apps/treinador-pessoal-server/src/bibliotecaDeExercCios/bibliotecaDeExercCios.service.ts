import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BibliotecaDeExercCiosServiceBase } from "./base/bibliotecaDeExercCios.service.base";

@Injectable()
export class BibliotecaDeExercCiosService extends BibliotecaDeExercCiosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
