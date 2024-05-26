import { CompartilhamentoSocialUpdateManyWithoutUsuRiosInput } from "./CompartilhamentoSocialUpdateManyWithoutUsuRiosInput";
import { DesempenhoDoUsuRioUpdateManyWithoutUsuRiosInput } from "./DesempenhoDoUsuRioUpdateManyWithoutUsuRiosInput";
import { MetasFitnesUpdateManyWithoutUsuRiosInput } from "./MetasFitnesUpdateManyWithoutUsuRiosInput";
import { PlanoDeTreinoUpdateManyWithoutUsuRiosInput } from "./PlanoDeTreinoUpdateManyWithoutUsuRiosInput";
import { RealizaEsERecompensasUpdateManyWithoutUsuRiosInput } from "./RealizaEsERecompensasUpdateManyWithoutUsuRiosInput";

export type UsuRioUpdateInput = {
  compartilhamentoSocials?: CompartilhamentoSocialUpdateManyWithoutUsuRiosInput;
  desempenhoDoUsuRios?: DesempenhoDoUsuRioUpdateManyWithoutUsuRiosInput;
  email?: string | null;
  idade?: number | null;
  metasFitnesItems?: MetasFitnesUpdateManyWithoutUsuRiosInput;
  nome?: string | null;
  planoDeTreinos?: PlanoDeTreinoUpdateManyWithoutUsuRiosInput;
  realizaEsERecompensasItems?: RealizaEsERecompensasUpdateManyWithoutUsuRiosInput;
};
