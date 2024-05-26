import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UsuRioTitle } from "../usuRio/UsuRioTitle";

export const SessODeTerapiaCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Data" source="data" />
        <TextInput label="Notas" multiline source="notas" />
        <TextInput label="Tipo" source="tipo" />
        <ReferenceInput source="usuRio.id" reference="UsuRio" label="Usuário">
          <SelectInput optionText={UsuRioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
