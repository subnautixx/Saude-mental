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

import { EXERCCIO_TITLE_FIELD } from "./ExercCioTitle";
import { USURIO_TITLE_FIELD } from "../usuRio/UsuRioTitle";
import { PLANODETREINO_TITLE_FIELD } from "../planoDeTreino/PlanoDeTreinoTitle";

export const ExercCioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="DesempenhoDoUsuRio"
          target="exercCioId"
          label="Desempenho do Usuários"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Data" source="data" />
            <ReferenceField
              label="Exercício"
              source="exerccio.id"
              reference="ExercCio"
            >
              <TextField source={EXERCCIO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Observações" source="observaEs" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Usuário"
              source="usurio.id"
              reference="UsuRio"
            >
              <TextField source={USURIO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
