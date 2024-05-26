import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SessODeTerapiaServiceBase } from "./base/sessODeTerapia.service.base";

@Injectable()
export class SessODeTerapiaService extends SessODeTerapiaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
