import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USURIO_TITLE_FIELD } from "../usuRio/UsuRioTitle";

export const PlanoDeTreinoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Plano de Treinos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Descrição" source="descriO" />
        <TextField label="Duração (semanas)" source="duraOSemanas" />
        <TextField label="ID" source="id" />
        <TextField label="Título" source="tTulo" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Usuário" source="usurio.id" reference="UsuRio">
          <TextField source={USURIO_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
