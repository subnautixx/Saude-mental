import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ExercCioTitle } from "../exercCio/ExercCioTitle";
import { UsuRioTitle } from "../usuRio/UsuRioTitle";

export const DesempenhoDoUsuRioCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Data" source="data" />
        <ReferenceInput
          source="exercCio.id"
          reference="ExercCio"
          label="Exercício"
        >
          <SelectInput optionText={ExercCioTitle} />
        </ReferenceInput>
        <TextInput label="Observações" multiline source="observaEs" />
        <ReferenceInput source="usuRio.id" reference="UsuRio" label="Usuário">
          <SelectInput optionText={UsuRioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
