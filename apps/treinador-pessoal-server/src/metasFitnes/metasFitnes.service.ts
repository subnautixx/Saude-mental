import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MetasFitnesServiceBase } from "./base/metasFitnes.service.base";

@Injectable()
export class MetasFitnesService extends MetasFitnesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
