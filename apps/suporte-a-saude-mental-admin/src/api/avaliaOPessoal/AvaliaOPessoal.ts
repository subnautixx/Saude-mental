import { JsonValue } from "type-fest";
import { UsuRio } from "../usuRio/UsuRio";

export type AvaliaOPessoal = {
  avaliaOMentalRegular: JsonValue;
  checkInsDiRios: boolean | null;
  conteDoPersonalizado: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  usuRio?: UsuRio | null;
};
