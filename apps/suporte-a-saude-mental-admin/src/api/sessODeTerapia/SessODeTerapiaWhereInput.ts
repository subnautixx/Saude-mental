import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type SessODeTerapiaWhereInput = {
  data?: DateTimeNullableFilter;
  id?: StringFilter;
  notas?: StringNullableFilter;
  tipo?: StringNullableFilter;
  usuRio?: UsuRioWhereUniqueInput;
};
