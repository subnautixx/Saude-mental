import { DesempenhoDoUsuRio as TDesempenhoDoUsuRio } from "../api/desempenhoDoUsuRio/DesempenhoDoUsuRio";

export const DESEMPENHODOUSURIO_TITLE_FIELD = "id";

export const DesempenhoDoUsuRioTitle = (
  record: TDesempenhoDoUsuRio
): string => {
  return record.id?.toString() || String(record.id);
};
