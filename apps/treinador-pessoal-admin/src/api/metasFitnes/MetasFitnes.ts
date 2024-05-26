import { UsuRio } from "../usuRio/UsuRio";

export type MetasFitnes = {
  createdAt: Date;
  id: string;
  metaDeCurtoPrazo: string | null;
  metaDeLongoPrazo: string | null;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
