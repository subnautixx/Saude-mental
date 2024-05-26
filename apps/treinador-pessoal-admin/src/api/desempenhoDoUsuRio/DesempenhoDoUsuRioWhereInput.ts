import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ExercCioWhereUniqueInput } from "../exercCio/ExercCioWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type DesempenhoDoUsuRioWhereInput = {
  data?: DateTimeNullableFilter;
  exercCio?: ExercCioWhereUniqueInput;
  id?: StringFilter;
  observaEs?: StringNullableFilter;
  usuRio?: UsuRioWhereUniqueInput;
};
