import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type RecomendaOUpdateInput = {
  descriO?: string | null;
  tipo?: string | null;
  tTulo?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
