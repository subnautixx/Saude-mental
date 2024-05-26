import { UsuRio } from "../usuRio/UsuRio";

export type SessODeTerapia = {
  createdAt: Date;
  data: Date | null;
  id: string;
  notas: string | null;
  tipo: string | null;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
