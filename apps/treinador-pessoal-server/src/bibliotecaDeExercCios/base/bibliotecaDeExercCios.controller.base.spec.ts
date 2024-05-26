import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { BibliotecaDeExercCiosController } from "../bibliotecaDeExercCios.controller";
import { BibliotecaDeExercCiosService } from "../bibliotecaDeExercCios.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  categoria: "exampleCategoria",
  createdAt: new Date(),
  id: "exampleId",
  instruEs: "exampleInstruEs",
  nome: "exampleNome",
  updatedAt: new Date(),
  vDeoLink: "exampleVDeoLink",
};
const CREATE_RESULT = {
  categoria: "exampleCategoria",
  createdAt: new Date(),
  id: "exampleId",
  instruEs: "exampleInstruEs",
  nome: "exampleNome",
  updatedAt: new Date(),
  vDeoLink: "exampleVDeoLink",
};
const FIND_MANY_RESULT = [
  {
    categoria: "exampleCategoria",
    createdAt: new Date(),
    id: "exampleId",
    instruEs: "exampleInstruEs",
    nome: "exampleNome",
    updatedAt: new Date(),
    vDeoLink: "exampleVDeoLink",
  },
];
const FIND_ONE_RESULT = {
  categoria: "exampleCategoria",
  createdAt: new Date(),
  id: "exampleId",
  instruEs: "exampleInstruEs",
  nome: "exampleNome",
  updatedAt: new Date(),
  vDeoLink: "exampleVDeoLink",
};

const service = {
  createBibliotecaDeExercCios() {
    return CREATE_RESULT;
  },
  bibliotecaDeExercCiosItems: () => FIND_MANY_RESULT,
  bibliotecaDeExercCios: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("BibliotecaDeExercCios", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BibliotecaDeExercCiosService,
          useValue: service,
        },
      ],
      controllers: [BibliotecaDeExercCiosController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /bibliotecaDeExercCios", async () => {
    await request(app.getHttpServer())
      .post("/bibliotecaDeExercCios")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bibliotecaDeExercCios", async () => {
    await request(app.getHttpServer())
      .get("/bibliotecaDeExercCios")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bibliotecaDeExercCios/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bibliotecaDeExercCios"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bibliotecaDeExercCios/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bibliotecaDeExercCios"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bibliotecaDeExercCios existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bibliotecaDeExercCios")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bibliotecaDeExercCios")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
