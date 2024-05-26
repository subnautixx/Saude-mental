import { RealizaEsERecompensas as TRealizaEsERecompensas } from "../api/realizaEsERecompensas/RealizaEsERecompensas";

export const REALIZAESERECOMPENSAS_TITLE_FIELD = "realizaO";

export const RealizaEsERecompensasTitle = (
  record: TRealizaEsERecompensas
): string => {
  return record.realizaO?.toString() || String(record.id);
};
