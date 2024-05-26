import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UsuRioTitle } from "../usuRio/UsuRioTitle";

export const MeditaOCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Descrição" multiline source="descriO" />
        <NumberInput step={1} label="Duração (minutos)" source="duraOMinutos" />
        <TextInput label="Nome" source="nome" />
        <ReferenceInput source="usuRio.id" reference="UsuRio" label="Usuário">
          <SelectInput optionText={UsuRioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
