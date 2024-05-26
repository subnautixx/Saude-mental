import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UsuRioTitle } from "../usuRio/UsuRioTitle";

export const MetasFitnesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Meta de Curto Prazo" source="metaDeCurtoPrazo" />
        <TextInput label="Meta de Longo Prazo" source="metaDeLongoPrazo" />
        <ReferenceInput source="usuRio.id" reference="UsuRio" label="Usuário">
          <SelectInput optionText={UsuRioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
