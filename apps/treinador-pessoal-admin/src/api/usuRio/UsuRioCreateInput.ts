import { CompartilhamentoSocialCreateNestedManyWithoutUsuRiosInput } from "./CompartilhamentoSocialCreateNestedManyWithoutUsuRiosInput";
import { DesempenhoDoUsuRioCreateNestedManyWithoutUsuRiosInput } from "./DesempenhoDoUsuRioCreateNestedManyWithoutUsuRiosInput";
import { MetasFitnesCreateNestedManyWithoutUsuRiosInput } from "./MetasFitnesCreateNestedManyWithoutUsuRiosInput";
import { PlanoDeTreinoCreateNestedManyWithoutUsuRiosInput } from "./PlanoDeTreinoCreateNestedManyWithoutUsuRiosInput";
import { RealizaEsERecompensasCreateNestedManyWithoutUsuRiosInput } from "./RealizaEsERecompensasCreateNestedManyWithoutUsuRiosInput";

export type UsuRioCreateInput = {
  compartilhamentoSocials?: CompartilhamentoSocialCreateNestedManyWithoutUsuRiosInput;
  desempenhoDoUsuRios?: DesempenhoDoUsuRioCreateNestedManyWithoutUsuRiosInput;
  email?: string | null;
  idade?: number | null;
  metasFitnesItems?: MetasFitnesCreateNestedManyWithoutUsuRiosInput;
  nome?: string | null;
  planoDeTreinos?: PlanoDeTreinoCreateNestedManyWithoutUsuRiosInput;
  realizaEsERecompensasItems?: RealizaEsERecompensasCreateNestedManyWithoutUsuRiosInput;
};
