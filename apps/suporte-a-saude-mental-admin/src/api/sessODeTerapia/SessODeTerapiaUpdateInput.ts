import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type SessODeTerapiaUpdateInput = {
  data?: Date | null;
  notas?: string | null;
  tipo?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
