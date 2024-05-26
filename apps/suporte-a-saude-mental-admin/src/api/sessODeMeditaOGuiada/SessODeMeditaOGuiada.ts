import { UsuRio } from "../usuRio/UsuRio";

export type SessODeMeditaOGuiada = {
  createdAt: Date;
  duraO: number | null;
  id: string;
  nome: string | null;
  objetivo: string | null;
  tipo?: "Option1" | null;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
