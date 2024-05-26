import { InputJsonValue } from "../../types";
import { UsuRioWhereUniqueInput } from "../usuRio/UsuRioWhereUniqueInput";

export type CompartilhamentoSocialUpdateInput = {
  progresso?: InputJsonValue;
  redeSocial?: string | null;
  usuRio?: UsuRioWhereUniqueInput | null;
};
