import { AvaliaOPessoal } from "../avaliaOPessoal/AvaliaOPessoal";
import { MeditaO } from "../meditaO/MeditaO";
import { RecomendaO } from "../recomendaO/RecomendaO";
import { RecursoAdicional } from "../recursoAdicional/RecursoAdicional";
import { SessODeMeditaOGuiada } from "../sessODeMeditaOGuiada/SessODeMeditaOGuiada";
import { SessODeTerapia } from "../sessODeTerapia/SessODeTerapia";

export type UsuRio = {
  avaliaOPessoals?: Array<AvaliaOPessoal>;
  createdAt: Date;
  email: string | null;
  id: string;
  idade: number | null;
  meditaOs?: Array<MeditaO>;
  nome: string | null;
  recomendaOs?: Array<RecomendaO>;
  recursoAdicionals?: Array<RecursoAdicional>;
  sessODeMeditaOGuiadas?: Array<SessODeMeditaOGuiada>;
  sessODeTerapias?: Array<SessODeTerapia>;
  updatedAt: Date;
};
