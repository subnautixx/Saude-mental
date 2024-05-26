import { ExercCioWhereUniqueInput } from "../exercCio/ExercCioWhereUniqueInput";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type DesempenhoDoUsuRioUpdateInput = {
  data?: Date | null;
  exercCio?: ExercCioWhereUniqueInput | null;
  observaEs?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
