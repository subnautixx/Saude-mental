import { AvaliaOPessoalCreateNestedManyWithoutUsuRiosInput } from "./AvaliaOPessoalCreateNestedManyWithoutUsuRiosInput";
import { MeditaOCreateNestedManyWithoutUsuRiosInput } from "./MeditaOCreateNestedManyWithoutUsuRiosInput";
import { RecomendaOCreateNestedManyWithoutUsuRiosInput } from "./RecomendaOCreateNestedManyWithoutUsuRiosInput";
import { RecursoAdicionalCreateNestedManyWithoutUsuRiosInput } from "./RecursoAdicionalCreateNestedManyWithoutUsuRiosInput";
import { SessODeMeditaOGuiadaCreateNestedManyWithoutUsuRiosInput } from "./SessODeMeditaOGuiadaCreateNestedManyWithoutUsuRiosInput";
import { SessODeTerapiaCreateNestedManyWithoutUsuRiosInput } from "./SessODeTerapiaCreateNestedManyWithoutUsuRiosInput";

export type UsuRioCreateInput = {
  avaliaOPessoals?: AvaliaOPessoalCreateNestedManyWithoutUsuRiosInput;
  email?: string | null;
  idade?: number | null;
  meditaOs?: MeditaOCreateNestedManyWithoutUsuRiosInput;
  nome?: string | null;
  recomendaOs?: RecomendaOCreateNestedManyWithoutUsuRiosInput;
  recursoAdicionals?: RecursoAdicionalCreateNestedManyWithoutUsuRiosInput;
  sessODeMeditaOGuiadas?: SessODeMeditaOGuiadaCreateNestedManyWithoutUsuRiosInput;
  sessODeTerapias?: SessODeTerapiaCreateNestedManyWithoutUsuRiosInput;
};
