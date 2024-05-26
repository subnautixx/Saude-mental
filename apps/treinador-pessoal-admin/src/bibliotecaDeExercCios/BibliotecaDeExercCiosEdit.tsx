import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BibliotecaDeExercCiosEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Categoria" source="categoria" />
        <TextInput label="Instruções" multiline source="instruEs" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Vídeo (link)" source="vDeoLink" />
      </SimpleForm>
    </Edit>
  );
};
