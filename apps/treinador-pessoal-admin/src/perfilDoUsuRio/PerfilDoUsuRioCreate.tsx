import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const PerfilDoUsuRioCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Altura" source="altura" />
        <SelectInput
          source="nVelAtualDeFitness"
          label="Nível atual de Fitness"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="Objetivos de Fitness"
          multiline
          source="objetivosDeFitness"
        />
        <NumberInput label="Peso" source="peso" />
      </SimpleForm>
    </Create>
  );
};
