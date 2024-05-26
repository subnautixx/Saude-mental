import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UsuRioTitle } from "../usuRio/UsuRioTitle";

export const RecursoAdicionalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Descrição" multiline source="descriO" />
        <TextInput label="Link" source="link" />
        <TextInput label="Nome do Recurso" source="nomeDoRecurso" />
        <SelectInput
          source="tipoDeRecurso"
          label="Tipo de Recurso"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="usuRio.id" reference="UsuRio" label="Usuário">
          <SelectInput optionText={UsuRioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
