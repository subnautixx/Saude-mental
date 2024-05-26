import { ExercCio } from "../exercCio/ExercCio";
import { UsuRio } from "../usuRio/UsuRio";

export type DesempenhoDoUsuRio = {
  createdAt: Date;
  data: Date | null;
  exercCio?: ExercCio | null;
  id: string;
  observaEs: string | null;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
