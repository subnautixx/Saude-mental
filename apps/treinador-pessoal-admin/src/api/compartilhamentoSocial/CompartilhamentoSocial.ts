import { JsonValue } from "type-fest";
import { UsuRio } from "../usuRio/UsuRio";

export type CompartilhamentoSocial = {
  createdAt: Date;
  id: string;
  progresso: JsonValue;
  redeSocial: string | null;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
