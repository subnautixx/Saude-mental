import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PerfilDoUsuRioWhereInput = {
  altura?: FloatNullableFilter;
  id?: StringFilter;
  nVelAtualDeFitness?: "Option1";
  objetivosDeFitness?: StringNullableFilter;
  peso?: FloatNullableFilter;
};
