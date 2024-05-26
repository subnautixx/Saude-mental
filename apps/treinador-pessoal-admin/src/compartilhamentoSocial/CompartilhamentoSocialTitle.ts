import { CompartilhamentoSocial as TCompartilhamentoSocial } from "../api/compartilhamentoSocial/CompartilhamentoSocial";

export const COMPARTILHAMENTOSOCIAL_TITLE_FIELD = "redeSocial";

export const CompartilhamentoSocialTitle = (
  record: TCompartilhamentoSocial
): string => {
  return record.redeSocial?.toString() || String(record.id);
};
