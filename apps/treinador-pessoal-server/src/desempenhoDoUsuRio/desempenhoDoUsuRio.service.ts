import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DesempenhoDoUsuRioServiceBase } from "./base/desempenhoDoUsuRio.service.base";

@Injectable()
export class DesempenhoDoUsuRioService extends DesempenhoDoUsuRioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
