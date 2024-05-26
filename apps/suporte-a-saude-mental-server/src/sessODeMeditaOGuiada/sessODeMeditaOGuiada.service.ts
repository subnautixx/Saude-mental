import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SessODeMeditaOGuiadaServiceBase } from "./base/sessODeMeditaOGuiada.service.base";

@Injectable()
export class SessODeMeditaOGuiadaService extends SessODeMeditaOGuiadaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
