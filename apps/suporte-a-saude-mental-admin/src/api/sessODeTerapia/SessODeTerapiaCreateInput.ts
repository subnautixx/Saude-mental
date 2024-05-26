import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type SessODeTerapiaCreateInput = {
  data?: Date | null;
  notas?: string | null;
  tipo?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
