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

export const SessODeTerapiaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sessão de Terapias"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data" source="data" />
        <TextField label="ID" source="id" />
        <TextField label="Notas" source="notas" />
        <TextField label="Tipo" source="tipo" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Usuário" source="usurio.id" reference="UsuRio">
          <TextField source={USURIO_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
