import { RecursoAdicional as TRecursoAdicional } from "../api/recursoAdicional/RecursoAdicional";

export const RECURSOADICIONAL_TITLE_FIELD = "link";

export const RecursoAdicionalTitle = (record: TRecursoAdicional): string => {
  return record.link?.toString() || String(record.id);
};
