import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ExercCioListRelationFilter } from "../exercCio/ExercCioListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type PlanoDeTreinoWhereInput = {
  descriO?: StringNullableFilter;
  duraOSemanas?: IntNullableFilter;
  exercCios?: ExercCioListRelationFilter;
  id?: StringFilter;
  tTulo?: StringNullableFilter;
  usuRio?: UsuRioWhereUniqueInput;
};
