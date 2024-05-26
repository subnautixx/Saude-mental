import { PerfilDoUsuRio as TPerfilDoUsuRio } from "../api/perfilDoUsuRio/PerfilDoUsuRio";

export const PERFILDOUSURIO_TITLE_FIELD = "id";

export const PerfilDoUsuRioTitle = (record: TPerfilDoUsuRio): string => {
  return record.id?.toString() || String(record.id);
};
