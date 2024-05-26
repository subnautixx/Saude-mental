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
import { PLANODETREINO_TITLE_FIELD } from "../planoDeTreino/PlanoDeTreinoTitle";

export const ExercCioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Exercícios"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
