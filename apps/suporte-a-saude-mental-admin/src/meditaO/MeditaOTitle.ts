import { MeditaO as TMeditaO } from "../api/meditaO/MeditaO";

export const MEDITAO_TITLE_FIELD = "nome";

export const MeditaOTitle = (record: TMeditaO): string => {
  return record.nome?.toString() || String(record.id);
};
