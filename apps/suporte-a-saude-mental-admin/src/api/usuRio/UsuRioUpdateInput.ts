import { AvaliaOPessoalUpdateManyWithoutUsuRiosInput } from "./AvaliaOPessoalUpdateManyWithoutUsuRiosInput";
import { MeditaOUpdateManyWithoutUsuRiosInput } from "./MeditaOUpdateManyWithoutUsuRiosInput";
import { RecomendaOUpdateManyWithoutUsuRiosInput } from "./RecomendaOUpdateManyWithoutUsuRiosInput";
import { RecursoAdicionalUpdateManyWithoutUsuRiosInput } from "./RecursoAdicionalUpdateManyWithoutUsuRiosInput";
import { SessODeMeditaOGuiadaUpdateManyWithoutUsuRiosInput } from "./SessODeMeditaOGuiadaUpdateManyWithoutUsuRiosInput";
import { SessODeTerapiaUpdateManyWithoutUsuRiosInput } from "./SessODeTerapiaUpdateManyWithoutUsuRiosInput";

export type UsuRioUpdateInput = {
  avaliaOPessoals?: AvaliaOPessoalUpdateManyWithoutUsuRiosInput;
  email?: string | null;
  idade?: number | null;
  meditaOs?: MeditaOUpdateManyWithoutUsuRiosInput;
  nome?: string | null;
  recomendaOs?: RecomendaOUpdateManyWithoutUsuRiosInput;
  recursoAdicionals?: RecursoAdicionalUpdateManyWithoutUsuRiosInput;
  sessODeMeditaOGuiadas?: SessODeMeditaOGuiadaUpdateManyWithoutUsuRiosInput;
  sessODeTerapias?: SessODeTerapiaUpdateManyWithoutUsuRiosInput;
};
