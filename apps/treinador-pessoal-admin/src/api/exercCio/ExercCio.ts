import { DesempenhoDoUsuRio } from "../desempenhoDoUsuRio/DesempenhoDoUsuRio";
import { PlanoDeTreino } from "../planoDeTreino/PlanoDeTreino";

export type ExercCio = {
  createdAt: Date;
  desempenhoDoUsuRios?: Array<DesempenhoDoUsuRio>;
  duraOMinutos: number | null;
  id: string;
  nome: string | null;
  planoDeTreino?: PlanoDeTreino | null;
  tipo: string | null;
  updatedAt: Date;
};
