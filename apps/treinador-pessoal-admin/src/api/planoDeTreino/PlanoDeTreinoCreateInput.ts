import { ExercCioCreateNestedManyWithoutPlanoDeTreinosInput } from "./ExercCioCreateNestedManyWithoutPlanoDeTreinosInput";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type PlanoDeTreinoCreateInput = {
  descriO?: string | null;
  duraOSemanas?: number | null;
  exercCios?: ExercCioCreateNestedManyWithoutPlanoDeTreinosInput;
  tTulo?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
