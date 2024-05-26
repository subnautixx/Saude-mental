import { ExercCioUpdateManyWithoutPlanoDeTreinosInput } from "./ExercCioUpdateManyWithoutPlanoDeTreinosInput";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type PlanoDeTreinoUpdateInput = {
  descriO?: string | null;
  duraOSemanas?: number | null;
  exercCios?: ExercCioUpdateManyWithoutPlanoDeTreinosInput;
  tTulo?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
