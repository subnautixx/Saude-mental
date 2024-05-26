import { UsuRio } from "../usuRio/UsuRio";

export type RecursoAdicional = {
  createdAt: Date;
  descriO: string | null;
  id: string;
  link: string | null;
  nomeDoRecurso: string | null;
  tipoDeRecurso?: "Option1" | null;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
