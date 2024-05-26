import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompartilhamentoSocialServiceBase } from "./base/compartilhamentoSocial.service.base";

@Injectable()
export class CompartilhamentoSocialService extends CompartilhamentoSocialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
