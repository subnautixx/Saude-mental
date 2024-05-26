import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type RealizaEsERecompensasCreateInput = {
  realizaO?: string | null;
  recompensa?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
