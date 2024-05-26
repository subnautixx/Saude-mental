import { BibliotecaDeExercCios as TBibliotecaDeExercCios } from "../api/bibliotecaDeExercCios/BibliotecaDeExercCios";

export const BIBLIOTECADEEXERCCIOS_TITLE_FIELD = "categoria";

export const BibliotecaDeExercCiosTitle = (
  record: TBibliotecaDeExercCios
): string => {
  return record.categoria?.toString() || String(record.id);
};
