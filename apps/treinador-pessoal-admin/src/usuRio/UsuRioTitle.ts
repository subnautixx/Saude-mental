import { UsuRio as TUsuRio } from "../api/usuRio/UsuRio";

export const USURIO_TITLE_FIELD = "nome";

export const UsuRioTitle = (record: TUsuRio): string => {
  return record.nome?.toString() || String(record.id);
};
