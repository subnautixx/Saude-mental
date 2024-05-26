import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecursoAdicionalServiceBase } from "./base/recursoAdicional.service.base";

@Injectable()
export class RecursoAdicionalService extends RecursoAdicionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
