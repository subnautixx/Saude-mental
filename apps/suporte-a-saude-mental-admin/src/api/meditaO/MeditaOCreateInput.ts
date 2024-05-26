import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type MeditaOCreateInput = {
  descriO?: string | null;
  duraOMinutos?: number | null;
  nome?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
