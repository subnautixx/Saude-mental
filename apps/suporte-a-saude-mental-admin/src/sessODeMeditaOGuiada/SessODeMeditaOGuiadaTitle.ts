import { SessODeMeditaOGuiada as TSessODeMeditaOGuiada } from "../api/sessODeMeditaOGuiada/SessODeMeditaOGuiada";

export const SESSODEMEDITAOGUIADA_TITLE_FIELD = "nome";

export const SessODeMeditaOGuiadaTitle = (
  record: TSessODeMeditaOGuiada
): string => {
  return record.nome?.toString() || String(record.id);
};
