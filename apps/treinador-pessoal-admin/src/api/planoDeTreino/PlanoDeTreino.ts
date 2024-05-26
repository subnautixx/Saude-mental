import { ExercCio } from "../exercCio/ExercCio";
import { UsuRio } from "../usuRio/UsuRio";

export type PlanoDeTreino = {
  createdAt: Date;
  descriO: string | null;
  duraOSemanas: number | null;
  exercCios?: Array<ExercCio>;
  id: string;
  tTulo: string | null;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
