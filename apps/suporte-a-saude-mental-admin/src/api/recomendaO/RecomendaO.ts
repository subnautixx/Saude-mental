import { UsuRio } from "../usuRio/UsuRio";

export type RecomendaO = {
  createdAt: Date;
  descriO: string | null;
  id: string;
  tipo: string | null;
  tTulo: string | null;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
