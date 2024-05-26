import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type RecomendaOWhereInput = {
  descriO?: StringNullableFilter;
  id?: StringFilter;
  tipo?: StringNullableFilter;
  tTulo?: StringNullableFilter;
  usuRio?: UsuRioWhereUniqueInput;
};
