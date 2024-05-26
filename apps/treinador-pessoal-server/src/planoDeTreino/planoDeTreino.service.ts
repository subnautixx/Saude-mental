import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlanoDeTreinoServiceBase } from "./base/planoDeTreino.service.base";

@Injectable()
export class PlanoDeTreinoService extends PlanoDeTreinoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
