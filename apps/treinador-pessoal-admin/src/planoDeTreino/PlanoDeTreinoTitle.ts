import { PlanoDeTreino as TPlanoDeTreino } from "../api/planoDeTreino/PlanoDeTreino";

export const PLANODETREINO_TITLE_FIELD = "tTulo";

export const PlanoDeTreinoTitle = (record: TPlanoDeTreino): string => {
  return record.tTulo?.toString() || String(record.id);
};
