import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExercCioServiceBase } from "./base/exercCio.service.base";

@Injectable()
export class ExercCioService extends ExercCioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
