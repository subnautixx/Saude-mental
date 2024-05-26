import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UsuRioTitle } from "../usuRio/UsuRioTitle";

export const RecursoAdicionalCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
