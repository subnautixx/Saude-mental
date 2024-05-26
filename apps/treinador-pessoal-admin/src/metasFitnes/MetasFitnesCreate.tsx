import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UsuRioTitle } from "../usuRio/UsuRioTitle";

export const MetasFitnesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Meta de Curto Prazo" source="metaDeCurtoPrazo" />
        <TextInput label="Meta de Longo Prazo" source="metaDeLongoPrazo" />
        <ReferenceInput source="usuRio.id" reference="UsuRio" label="Usuário">
          <SelectInput optionText={UsuRioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
