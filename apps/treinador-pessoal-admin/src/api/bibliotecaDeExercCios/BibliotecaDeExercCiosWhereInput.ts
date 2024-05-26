import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BibliotecaDeExercCiosWhereInput = {
  categoria?: StringNullableFilter;
  id?: StringFilter;
  instruEs?: StringNullableFilter;
  nome?: StringNullableFilter;
  vDeoLink?: StringNullableFilter;
};
