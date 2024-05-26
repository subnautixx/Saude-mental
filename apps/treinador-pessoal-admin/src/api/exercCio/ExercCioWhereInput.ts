import { DesempenhoDoUsuRioListRelationFilter } from "../desempenhoDoUsuRio/DesempenhoDoUsuRioListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlanoDeTreinoWhereUniqueInput } from "../planoDeTreino/PlanoDeTreinoWhereUniqueInput";

export type ExercCioWhereInput = {
  desempenhoDoUsuRios?: DesempenhoDoUsuRioListRelationFilter;
  duraOMinutos?: IntNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  planoDeTreino?: PlanoDeTreinoWhereUniqueInput;
  tipo?: StringNullableFilter;
};
