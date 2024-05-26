import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AvaliaOPessoalTitle } from "../avaliaOPessoal/AvaliaOPessoalTitle";
import { MeditaOTitle } from "../meditaO/MeditaOTitle";
import { RecomendaOTitle } from "../recomendaO/RecomendaOTitle";
import { RecursoAdicionalTitle } from "../recursoAdicional/RecursoAdicionalTitle";
import { SessODeMeditaOGuiadaTitle } from "../sessODeMeditaOGuiada/SessODeMeditaOGuiadaTitle";
import { SessODeTerapiaTitle } from "../sessODeTerapia/SessODeTerapiaTitle";

export const UsuRioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="avaliaOPessoals"
          reference="AvaliaOPessoal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AvaliaOPessoalTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <NumberInput step={1} label="Idade" source="idade" />
        <ReferenceArrayInput
          source="meditaOs"
          reference="MeditaO"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MeditaOTitle} />
        </ReferenceArrayInput>
        <TextInput label="Nome" source="nome" />
        <ReferenceArrayInput
          source="recomendaOs"
          reference="RecomendaO"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecomendaOTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="recursoAdicionals"
          reference="RecursoAdicional"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecursoAdicionalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sessODeMeditaOGuiadas"
          reference="SessODeMeditaOGuiada"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessODeMeditaOGuiadaTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sessODeTerapias"
          reference="SessODeTerapia"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessODeTerapiaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
