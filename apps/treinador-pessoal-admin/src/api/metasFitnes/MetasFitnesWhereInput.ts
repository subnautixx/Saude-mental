import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type MetasFitnesWhereInput = {
  id?: StringFilter;
  metaDeCurtoPrazo?: StringNullableFilter;
  metaDeLongoPrazo?: StringNullableFilter;
  usuRio?: UsuRioWhereUniqueInput;
};
