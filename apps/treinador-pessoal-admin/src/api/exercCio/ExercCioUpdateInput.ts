import { DesempenhoDoUsuRioUpdateManyWithoutExercCiosInput } from "./DesempenhoDoUsuRioUpdateManyWithoutExercCiosInput";
import { PlanoDeTreinoWhereUniqueInput } from "../planoDeTreino/PlanoDeTreinoWhereUniqueInput";

export type ExercCioUpdateInput = {
  desempenhoDoUsuRios?: DesempenhoDoUsuRioUpdateManyWithoutExercCiosInput;
  duraOMinutos?: number | null;
  nome?: string | null;
  planoDeTreino?: PlanoDeTreinoWhereUniqueInput | null;
  tipo?: string | null;
};
