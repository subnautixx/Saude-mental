import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USURIO_TITLE_FIELD } from "../usuRio/UsuRioTitle";

export const RecomendaOShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Descrição" source="descriO" />
        <TextField label="ID" source="id" />
        <TextField label="Tipo" source="tipo" />
        <TextField label="Título" source="tTulo" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Usuário" source="usurio.id" reference="UsuRio">
          <TextField source={USURIO_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
