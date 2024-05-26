import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type MetasFitnesCreateInput = {
  metaDeCurtoPrazo?: string | null;
  metaDeLongoPrazo?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
