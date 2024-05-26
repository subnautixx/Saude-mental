import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RealizaEsERecompensasServiceBase } from "./base/realizaEsERecompensas.service.base";

@Injectable()
export class RealizaEsERecompensasService extends RealizaEsERecompensasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
