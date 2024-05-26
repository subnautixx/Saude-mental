import { ExercCio as TExercCio } from "../api/exercCio/ExercCio";

export const EXERCCIO_TITLE_FIELD = "nome";

export const ExercCioTitle = (record: TExercCio): string => {
  return record.nome?.toString() || String(record.id);
};
