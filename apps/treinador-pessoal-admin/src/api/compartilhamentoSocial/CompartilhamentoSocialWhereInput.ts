import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type CompartilhamentoSocialWhereInput = {
  id?: StringFilter;
  progresso?: JsonFilter;
  redeSocial?: StringNullableFilter;
  usuRio?: UsuRioWhereUniqueInput;
};
