import { SessODeTerapia as TSessODeTerapia } from "../api/sessODeTerapia/SessODeTerapia";

export const SESSODETERAPIA_TITLE_FIELD = "tipo";

export const SessODeTerapiaTitle = (record: TSessODeTerapia): string => {
  return record.tipo?.toString() || String(record.id);
};
