import { InputJsonValue } from "../../types";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type CompartilhamentoSocialCreateInput = {
  progresso?: InputJsonValue;
  redeSocial?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
