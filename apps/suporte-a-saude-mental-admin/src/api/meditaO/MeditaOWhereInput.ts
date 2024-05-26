import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type MeditaOWhereInput = {
  descriO?: StringNullableFilter;
  duraOMinutos?: IntNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  usuRio?: UsuRioWhereUniqueInput;
};
