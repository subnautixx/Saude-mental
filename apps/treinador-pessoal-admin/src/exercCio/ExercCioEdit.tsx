import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DesempenhoDoUsuRioTitle } from "../desempenhoDoUsuRio/DesempenhoDoUsuRioTitle";
import { PlanoDeTreinoTitle } from "../planoDeTreino/PlanoDeTreinoTitle";

export const ExercCioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="desempenhoDoUsuRios"
          reference="DesempenhoDoUsuRio"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DesempenhoDoUsuRioTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Duração (minutos)" source="duraOMinutos" />
        <TextInput label="Nome" source="nome" />
        <ReferenceInput
          source="planoDeTreino.id"
          reference="PlanoDeTreino"
          label="Plano de Treino"
        >
          <SelectInput optionText={PlanoDeTreinoTitle} />
        </ReferenceInput>
        <TextInput label="Tipo" source="tipo" />
      </SimpleForm>
    </Edit>
  );
};
