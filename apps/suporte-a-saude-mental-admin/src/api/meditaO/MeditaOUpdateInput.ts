import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type MeditaOUpdateInput = {
  descriO?: string | null;
  duraOMinutos?: number | null;
  nome?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
