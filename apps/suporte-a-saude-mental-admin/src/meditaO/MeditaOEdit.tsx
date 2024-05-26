import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UsuRioTitle } from "../usuRio/UsuRioTitle";

export const MeditaOEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Descrição" multiline source="descriO" />
        <NumberInput step={1} label="Duração (minutos)" source="duraOMinutos" />
        <TextInput label="Nome" source="nome" />
        <ReferenceInput source="usuRio.id" reference="UsuRio" label="Usuário">
          <SelectInput optionText={UsuRioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
