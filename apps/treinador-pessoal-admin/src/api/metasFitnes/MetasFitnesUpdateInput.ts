import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type MetasFitnesUpdateInput = {
  metaDeCurtoPrazo?: string | null;
  metaDeLongoPrazo?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
