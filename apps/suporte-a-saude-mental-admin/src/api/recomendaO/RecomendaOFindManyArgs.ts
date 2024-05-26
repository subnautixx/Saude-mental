import { RecomendaOWhereInput } from "./RecomendaOWhereInput";
import { RecomendaOOrderByInput } from "./RecomendaOOrderByInput";

export type RecomendaOFindManyArgs = {
  where?: RecomendaOWhereInput;
  orderBy?: Array<RecomendaOOrderByInput>;
  skip?: number;
  take?: number;
};
