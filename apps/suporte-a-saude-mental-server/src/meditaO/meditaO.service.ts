import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeditaOServiceBase } from "./base/meditaO.service.base";

@Injectable()
export class MeditaOService extends MeditaOServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
