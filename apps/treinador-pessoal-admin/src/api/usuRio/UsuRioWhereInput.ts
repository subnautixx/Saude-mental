import { CompartilhamentoSocialListRelationFilter } from "../compartilhamentoSocial/CompartilhamentoSocialListRelationFilter";
import { DesempenhoDoUsuRioListRelationFilter } from "../desempenhoDoUsuRio/DesempenhoDoUsuRioListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { MetasFitnesListRelationFilter } from "../metasFitnes/MetasFitnesListRelationFilter";
import { PlanoDeTreinoListRelationFilter } from "../planoDeTreino/PlanoDeTreinoListRelationFilter";
import { RealizaEsERecompensasListRelationFilter } from "../realizaEsERecompensas/RealizaEsERecompensasListRelationFilter";

export type UsuRioWhereInput = {
  compartilhamentoSocials?: CompartilhamentoSocialListRelationFilter;
  desempenhoDoUsuRios?: DesempenhoDoUsuRioListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  idade?: IntNullableFilter;
  metasFitnesItems?: MetasFitnesListRelationFilter;
  nome?: StringNullableFilter;
  planoDeTreinos?: PlanoDeTreinoListRelationFilter;
  realizaEsERecompensasItems?: RealizaEsERecompensasListRelationFilter;
};
