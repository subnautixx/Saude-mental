import { RecomendaO as TRecomendaO } from "../api/recomendaO/RecomendaO";

export const RECOMENDAO_TITLE_FIELD = "tipo";

export const RecomendaOTitle = (record: TRecomendaO): string => {
  return record.tipo?.toString() || String(record.id);
};
