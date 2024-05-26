import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type AvaliaOPessoalWhereInput = {
  avaliaOMentalRegular?: JsonFilter;
  checkInsDiRios?: BooleanNullableFilter;
  conteDoPersonalizado?: JsonFilter;
  id?: StringFilter;
  usuRio?: UsuRioWhereUniqueInput;
};
