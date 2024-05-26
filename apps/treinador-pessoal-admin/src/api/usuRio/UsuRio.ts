import { CompartilhamentoSocial } from "../compartilhamentoSocial/CompartilhamentoSocial";
import { DesempenhoDoUsuRio } from "../desempenhoDoUsuRio/DesempenhoDoUsuRio";
import { MetasFitnes } from "../metasFitnes/MetasFitnes";
import { PlanoDeTreino } from "../planoDeTreino/PlanoDeTreino";
import { RealizaEsERecompensas } from "../realizaEsERecompensas/RealizaEsERecompensas";

export type UsuRio = {
  compartilhamentoSocials?: Array<CompartilhamentoSocial>;
  createdAt: Date;
  desempenhoDoUsuRios?: Array<DesempenhoDoUsuRio>;
  email: string | null;
  id: string;
  idade: number | null;
  metasFitnesItems?: Array<MetasFitnes>;
  nome: string | null;
  planoDeTreinos?: Array<PlanoDeTreino>;
  realizaEsERecompensasItems?: Array<RealizaEsERecompensas>;
  updatedAt: Date;
};
