import { AvaliaOPessoalListRelationFilter } from "../avaliaOPessoal/AvaliaOPessoalListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { MeditaOListRelationFilter } from "../meditaO/MeditaOListRelationFilter";
import { RecomendaOListRelationFilter } from "../recomendaO/RecomendaOListRelationFilter";
import { RecursoAdicionalListRelationFilter } from "../recursoAdicional/RecursoAdicionalListRelationFilter";
import { SessODeMeditaOGuiadaListRelationFilter } from "../sessODeMeditaOGuiada/SessODeMeditaOGuiadaListRelationFilter";
import { SessODeTerapiaListRelationFilter } from "../sessODeTerapia/SessODeTerapiaListRelationFilter";

export type UsuRioWhereInput = {
  avaliaOPessoals?: AvaliaOPessoalListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  idade?: IntNullableFilter;
  meditaOs?: MeditaOListRelationFilter;
  nome?: StringNullableFilter;
  recomendaOs?: RecomendaOListRelationFilter;
  recursoAdicionals?: RecursoAdicionalListRelationFilter;
  sessODeMeditaOGuiadas?: SessODeMeditaOGuiadaListRelationFilter;
  sessODeTerapias?: SessODeTerapiaListRelationFilter;
};
