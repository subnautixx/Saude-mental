import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AvaliaOPessoalServiceBase } from "./base/avaliaOPessoal.service.base";

@Injectable()
export class AvaliaOPessoalService extends AvaliaOPessoalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
