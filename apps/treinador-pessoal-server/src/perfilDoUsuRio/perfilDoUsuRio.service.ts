import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerfilDoUsuRioServiceBase } from "./base/perfilDoUsuRio.service.base";

@Injectable()
export class PerfilDoUsuRioService extends PerfilDoUsuRioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
