import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsuRioServiceBase } from "./base/usuRio.service.base";

@Injectable()
export class UsuRioService extends UsuRioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
