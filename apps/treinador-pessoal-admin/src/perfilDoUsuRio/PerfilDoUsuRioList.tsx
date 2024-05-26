import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PerfilDoUsuRioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Perfil do Usuários"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Altura" source="altura" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Nível atual de Fitness" source="nVelAtualDeFitness" />
        <TextField label="Objetivos de Fitness" source="objetivosDeFitness" />
        <TextField label="Peso" source="peso" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
