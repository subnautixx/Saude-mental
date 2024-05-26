import { UsuRio } from "../usuRio/UsuRio";

export type RealizaEsERecompensas = {
  createdAt: Date;
  id: string;
  realizaO: string | null;
  recompensa: string | null;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
