import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import { USURIO_TITLE_FIELD } from "../usuRio/UsuRioTitle";

export const AvaliaOPessoalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Avaliação Mental Regular"
          source="avaliaOMentalRegular"
        />
        <BooleanField label="Check-ins Diários" source="checkInsDiRios" />
        <TextField
          label="Conteúdo Personalizado"
          source="conteDoPersonalizado"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Usuário" source="usurio.id" reference="UsuRio">
          <TextField source={USURIO_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
