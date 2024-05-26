import { Module } from "@nestjs/common";
import { UsuRioModule } from "./usuRio/usuRio.module";
import { SessODeTerapiaModule } from "./sessODeTerapia/sessODeTerapia.module";
import { MeditaOModule } from "./meditaO/meditaO.module";
import { RecomendaOModule } from "./recomendaO/recomendaO.module";
import { SessODeMeditaOGuiadaModule } from "./sessODeMeditaOGuiada/sessODeMeditaOGuiada.module";
import { AvaliaOPessoalModule } from "./avaliaOPessoal/avaliaOPessoal.module";
import { RecursoAdicionalModule } from "./recursoAdicional/recursoAdicional.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UsuRioModule,
    SessODeTerapiaModule,
    MeditaOModule,
    RecomendaOModule,
    SessODeMeditaOGuiadaModule,
    AvaliaOPessoalModule,
    RecursoAdicionalModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
