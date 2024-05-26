import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CompartilhamentoSocialTitle } from "../compartilhamentoSocial/CompartilhamentoSocialTitle";
import { DesempenhoDoUsuRioTitle } from "../desempenhoDoUsuRio/DesempenhoDoUsuRioTitle";
import { MetasFitnesTitle } from "../metasFitnes/MetasFitnesTitle";
import { PlanoDeTreinoTitle } from "../planoDeTreino/PlanoDeTreinoTitle";
import { RealizaEsERecompensasTitle } from "../realizaEsERecompensas/RealizaEsERecompensasTitle";

export const UsuRioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="compartilhamentoSocials"
          reference="CompartilhamentoSocial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompartilhamentoSocialTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="desempenhoDoUsuRios"
          reference="DesempenhoDoUsuRio"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DesempenhoDoUsuRioTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <NumberInput step={1} label="Idade" source="idade" />
        <ReferenceArrayInput
          source="metasFitnesItems"
          reference="MetasFitnes"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MetasFitnesTitle} />
        </ReferenceArrayInput>
        <TextInput label="Nome" source="nome" />
        <ReferenceArrayInput
          source="planoDeTreinos"
          reference="PlanoDeTreino"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlanoDeTreinoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="realizaEsERecompensasItems"
          reference="RealizaEsERecompensas"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RealizaEsERecompensasTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
