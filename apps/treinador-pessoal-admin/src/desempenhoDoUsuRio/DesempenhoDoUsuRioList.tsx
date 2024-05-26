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
import { EXERCCIO_TITLE_FIELD } from "../exercCio/ExercCioTitle";
import { USURIO_TITLE_FIELD } from "../usuRio/UsuRioTitle";

export const DesempenhoDoUsuRioList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Desempenho do Usuários"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Usuário" source="usurio.id" reference="UsuRio">
          <TextField source={USURIO_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
