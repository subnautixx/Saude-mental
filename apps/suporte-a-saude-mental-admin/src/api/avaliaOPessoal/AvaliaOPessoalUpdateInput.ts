import { InputJsonValue } from "../../types";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type AvaliaOPessoalUpdateInput = {
  avaliaOMentalRegular?: InputJsonValue;
  checkInsDiRios?: boolean | null;
  conteDoPersonalizado?: InputJsonValue;
  usuRio?: UsuRioWhereUniqueInput | null;
};
