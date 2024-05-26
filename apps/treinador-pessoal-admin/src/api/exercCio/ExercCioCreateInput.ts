import { DesempenhoDoUsuRioCreateNestedManyWithoutExercCiosInput } from "./DesempenhoDoUsuRioCreateNestedManyWithoutExercCiosInput";
import { PlanoDeTreinoWhereUniqueInput } from "../planoDeTreino/PlanoDeTreinoWhereUniqueInput";

export type ExercCioCreateInput = {
  desempenhoDoUsuRios?: DesempenhoDoUsuRioCreateNestedManyWithoutExercCiosInput;
  duraOMinutos?: number | null;
  nome?: string | null;
  planoDeTreino?: PlanoDeTreinoWhereUniqueInput | null;
  tipo?: string | null;
};
