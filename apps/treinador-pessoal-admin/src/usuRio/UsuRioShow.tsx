import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USURIO_TITLE_FIELD } from "./UsuRioTitle";
import { EXERCCIO_TITLE_FIELD } from "../exercCio/ExercCioTitle";

export const UsuRioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Idade" source="idade" />
        <TextField label="Nome" source="nome" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CompartilhamentoSocial"
          target="usuRioId"
          label="Compartilhamento Socials"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Progresso" source="progresso" />
            <TextField label="Rede Social" source="redeSocial" />
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
        <ReferenceManyField
          reference="DesempenhoDoUsuRio"
          target="usuRioId"
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
        <ReferenceManyField
          reference="MetasFitnes"
          target="usuRioId"
          label="Metas FitnesItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Meta de Curto Prazo" source="metaDeCurtoPrazo" />
            <TextField label="Meta de Longo Prazo" source="metaDeLongoPrazo" />
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
        <ReferenceManyField
          reference="PlanoDeTreino"
          target="usuRioId"
          label="Plano de Treinos"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Descrição" source="descriO" />
            <TextField label="Duração (semanas)" source="duraOSemanas" />
            <TextField label="ID" source="id" />
            <TextField label="Título" source="tTulo" />
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
        <ReferenceManyField
          reference="RealizaEsERecompensas"
          target="usuRioId"
          label="Realizações e RecompensasItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Realização" source="realizaO" />
            <TextField label="Recompensa" source="recompensa" />
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
