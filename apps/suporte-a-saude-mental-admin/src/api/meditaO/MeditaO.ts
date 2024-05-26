import { UsuRio } from "../usuRio/UsuRio";

export type MeditaO = {
  createdAt: Date;
  descriO: string | null;
  duraOMinutos: number | null;
  id: string;
  nome: string | null;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
