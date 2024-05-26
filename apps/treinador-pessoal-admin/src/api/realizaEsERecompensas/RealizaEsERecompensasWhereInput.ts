import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type RealizaEsERecompensasWhereInput = {
  id?: StringFilter;
  realizaO?: StringNullableFilter;
  recompensa?: StringNullableFilter;
  usuRio?: UsuRioWhereUniqueInput;
};
