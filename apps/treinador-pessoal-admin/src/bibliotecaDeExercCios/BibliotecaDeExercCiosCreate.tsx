import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BibliotecaDeExercCiosCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Categoria" source="categoria" />
        <TextInput label="Instruções" multiline source="instruEs" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Vídeo (link)" source="vDeoLink" />
      </SimpleForm>
    </Create>
  );
};
