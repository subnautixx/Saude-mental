import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecomendaOServiceBase } from "./base/recomendaO.service.base";

@Injectable()
export class RecomendaOService extends RecomendaOServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
