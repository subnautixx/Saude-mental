import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type SessODeMeditaOGuiadaCreateInput = {
  duraO?: number | null;
  nome?: string | null;
  objetivo?: string | null;
  tipo?: "Option1" | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
