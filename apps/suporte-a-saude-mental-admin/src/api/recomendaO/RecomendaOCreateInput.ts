import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type RecomendaOCreateInput = {
  descriO?: string | null;
  tipo?: string | null;
  tTulo?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
