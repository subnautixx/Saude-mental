import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type SessODeMeditaOGuiadaWhereInput = {
  duraO?: IntNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  objetivo?: StringNullableFilter;
  tipo?: "Option1";
  usuRio?: UsuRioWhereUniqueInput;
};
