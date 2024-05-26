import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ExercCioTitle } from "../exercCio/ExercCioTitle";
import { UsuRioTitle } from "../usuRio/UsuRioTitle";

export const PlanoDeTreinoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Descrição" multiline source="descriO" />
        <NumberInput step={1} label="Duração (semanas)" source="duraOSemanas" />
        <ReferenceArrayInput
          source="exercCios"
          reference="ExercCio"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExercCioTitle} />
        </ReferenceArrayInput>
        <TextInput label="Título" source="tTulo" />
        <ReferenceInput source="usuRio.id" reference="UsuRio" label="Usuário">
          <SelectInput optionText={UsuRioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
