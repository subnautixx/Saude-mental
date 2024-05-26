import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PLANODETREINO_TITLE_FIELD } from "./PlanoDeTreinoTitle";
import { USURIO_TITLE_FIELD } from "../usuRio/UsuRioTitle";

export const PlanoDeTreinoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Descrição" source="descriO" />
        <TextField label="Duração (semanas)" source="duraOSemanas" />
        <TextField label="ID" source="id" />
        <TextField label="Título" source="tTulo" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Usuário" source="usurio.id" reference="UsuRio">
          <TextField source={USURIO_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ExercCio"
          target="planoDeTreinoId"
          label="Exercícios"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Duração (minutos)" source="duraOMinutos" />
            <TextField label="ID" source="id" />
            <TextField label="Nome" source="nome" />
            <ReferenceField
              label="Plano de Treino"
              source="planodetreino.id"
              reference="PlanoDeTreino"
            >
              <TextField source={PLANODETREINO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tipo" source="tipo" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
