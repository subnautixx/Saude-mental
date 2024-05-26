import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type RecursoAdicionalUpdateInput = {
  descriO?: string | null;
  link?: string | null;
  nomeDoRecurso?: string | null;
  tipoDeRecurso?: "Option1" | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
