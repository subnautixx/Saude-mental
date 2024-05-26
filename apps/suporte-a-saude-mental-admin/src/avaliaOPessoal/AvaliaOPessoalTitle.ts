import { AvaliaOPessoal as TAvaliaOPessoal } from "../api/avaliaOPessoal/AvaliaOPessoal";

export const AVALIAOPESSOAL_TITLE_FIELD = "id";

export const AvaliaOPessoalTitle = (record: TAvaliaOPessoal): string => {
  return record.id?.toString() || String(record.id);
};
