import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USURIO_TITLE_FIELD } from "./UsuRioTitle";

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
          reference="AvaliaOPessoal"
          target="usuRioId"
          label="Avaliação Pessoals"
        >
          <Datagrid rowClick="show">
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
          reference="MeditaO"
          target="usuRioId"
          label="Meditaçãos"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Descrição" source="descriO" />
            <TextField label="Duração (minutos)" source="duraOMinutos" />
            <TextField label="ID" source="id" />
            <TextField label="Nome" source="nome" />
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
          reference="RecomendaO"
          target="usuRioId"
          label="Recomendaçãos"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Descrição" source="descriO" />
            <TextField label="ID" source="id" />
            <TextField label="Tipo" source="tipo" />
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
          reference="RecursoAdicional"
          target="usuRioId"
          label="Recurso Adicionals"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Descrição" source="descriO" />
            <TextField label="ID" source="id" />
            <TextField label="Link" source="link" />
            <TextField label="Nome do Recurso" source="nomeDoRecurso" />
            <TextField label="Tipo de Recurso" source="tipoDeRecurso" />
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
          reference="SessODeMeditaOGuiada"
          target="usuRioId"
          label="Sessão de Meditação Guiadas"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Duração" source="duraO" />
            <TextField label="ID" source="id" />
            <TextField label="Nome" source="nome" />
            <TextField label="Objetivo" source="objetivo" />
            <TextField label="Tipo" source="tipo" />
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
          reference="SessODeTerapia"
          target="usuRioId"
          label="Sessão de Terapias"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Data" source="data" />
            <TextField label="ID" source="id" />
            <TextField label="Notas" source="notas" />
            <TextField label="Tipo" source="tipo" />
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
