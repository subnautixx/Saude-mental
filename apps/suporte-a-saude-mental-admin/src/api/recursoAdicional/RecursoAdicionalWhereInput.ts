import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type RecursoAdicionalWhereInput = {
  descriO?: StringNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  nomeDoRecurso?: StringNullableFilter;
  tipoDeRecurso?: "Option1";
  usuRio?: UsuRioWhereUniqueInput;
};
