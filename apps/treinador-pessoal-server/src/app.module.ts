import { Module } from "@nestjs/common";
import { ExercCioModule } from "./exercCio/exercCio.module";
import { DesempenhoDoUsuRioModule } from "./desempenhoDoUsuRio/desempenhoDoUsuRio.module";
import { UsuRioModule } from "./usuRio/usuRio.module";
import { PlanoDeTreinoModule } from "./planoDeTreino/planoDeTreino.module";
import { BibliotecaDeExercCiosModule } from "./bibliotecaDeExercCios/bibliotecaDeExercCios.module";
import { PerfilDoUsuRioModule } from "./perfilDoUsuRio/perfilDoUsuRio.module";
import { RealizaEsERecompensasModule } from "./realizaEsERecompensas/realizaEsERecompensas.module";
import { MetasFitnesModule } from "./metasFitnes/metasFitnes.module";
import { CompartilhamentoSocialModule } from "./compartilhamentoSocial/compartilhamentoSocial.module";
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
    ExercCioModule,
    DesempenhoDoUsuRioModule,
    UsuRioModule,
    PlanoDeTreinoModule,
    BibliotecaDeExercCiosModule,
    PerfilDoUsuRioModule,
    RealizaEsERecompensasModule,
    MetasFitnesModule,
    CompartilhamentoSocialModule,
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
