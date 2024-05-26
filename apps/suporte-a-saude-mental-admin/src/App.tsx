import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UsuRioList } from "./usuRio/UsuRioList";
import { UsuRioCreate } from "./usuRio/UsuRioCreate";
import { UsuRioEdit } from "./usuRio/UsuRioEdit";
import { UsuRioShow } from "./usuRio/UsuRioShow";
import { SessODeTerapiaList } from "./sessODeTerapia/SessODeTerapiaList";
import { SessODeTerapiaCreate } from "./sessODeTerapia/SessODeTerapiaCreate";
import { SessODeTerapiaEdit } from "./sessODeTerapia/SessODeTerapiaEdit";
import { SessODeTerapiaShow } from "./sessODeTerapia/SessODeTerapiaShow";
import { MeditaOList } from "./meditaO/MeditaOList";
import { MeditaOCreate } from "./meditaO/MeditaOCreate";
import { MeditaOEdit } from "./meditaO/MeditaOEdit";
import { MeditaOShow } from "./meditaO/MeditaOShow";
import { RecomendaOList } from "./recomendaO/RecomendaOList";
import { RecomendaOCreate } from "./recomendaO/RecomendaOCreate";
import { RecomendaOEdit } from "./recomendaO/RecomendaOEdit";
import { RecomendaOShow } from "./recomendaO/RecomendaOShow";
import { SessODeMeditaOGuiadaList } from "./sessODeMeditaOGuiada/SessODeMeditaOGuiadaList";
import { SessODeMeditaOGuiadaCreate } from "./sessODeMeditaOGuiada/SessODeMeditaOGuiadaCreate";
import { SessODeMeditaOGuiadaEdit } from "./sessODeMeditaOGuiada/SessODeMeditaOGuiadaEdit";
import { SessODeMeditaOGuiadaShow } from "./sessODeMeditaOGuiada/SessODeMeditaOGuiadaShow";
import { AvaliaOPessoalList } from "./avaliaOPessoal/AvaliaOPessoalList";
import { AvaliaOPessoalCreate } from "./avaliaOPessoal/AvaliaOPessoalCreate";
import { AvaliaOPessoalEdit } from "./avaliaOPessoal/AvaliaOPessoalEdit";
import { AvaliaOPessoalShow } from "./avaliaOPessoal/AvaliaOPessoalShow";
import { RecursoAdicionalList } from "./recursoAdicional/RecursoAdicionalList";
import { RecursoAdicionalCreate } from "./recursoAdicional/RecursoAdicionalCreate";
import { RecursoAdicionalEdit } from "./recursoAdicional/RecursoAdicionalEdit";
import { RecursoAdicionalShow } from "./recursoAdicional/RecursoAdicionalShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Suporte à Saúde Mental"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UsuRio"
          list={UsuRioList}
          edit={UsuRioEdit}
          create={UsuRioCreate}
          show={UsuRioShow}
        />
        <Resource
          name="SessODeTerapia"
          list={SessODeTerapiaList}
          edit={SessODeTerapiaEdit}
          create={SessODeTerapiaCreate}
          show={SessODeTerapiaShow}
        />
        <Resource
          name="MeditaO"
          list={MeditaOList}
          edit={MeditaOEdit}
          create={MeditaOCreate}
          show={MeditaOShow}
        />
        <Resource
          name="RecomendaO"
          list={RecomendaOList}
          edit={RecomendaOEdit}
          create={RecomendaOCreate}
          show={RecomendaOShow}
        />
        <Resource
          name="SessODeMeditaOGuiada"
          list={SessODeMeditaOGuiadaList}
          edit={SessODeMeditaOGuiadaEdit}
          create={SessODeMeditaOGuiadaCreate}
          show={SessODeMeditaOGuiadaShow}
        />
        <Resource
          name="AvaliaOPessoal"
          list={AvaliaOPessoalList}
          edit={AvaliaOPessoalEdit}
          create={AvaliaOPessoalCreate}
          show={AvaliaOPessoalShow}
        />
        <Resource
          name="RecursoAdicional"
          list={RecursoAdicionalList}
          edit={RecursoAdicionalEdit}
          create={RecursoAdicionalCreate}
          show={RecursoAdicionalShow}
        />
      </Admin>
    </div>
  );
};

export default App;
