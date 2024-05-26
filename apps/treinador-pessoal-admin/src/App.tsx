import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ExercCioList } from "./exercCio/ExercCioList";
import { ExercCioCreate } from "./exercCio/ExercCioCreate";
import { ExercCioEdit } from "./exercCio/ExercCioEdit";
import { ExercCioShow } from "./exercCio/ExercCioShow";
import { DesempenhoDoUsuRioList } from "./desempenhoDoUsuRio/DesempenhoDoUsuRioList";
import { DesempenhoDoUsuRioCreate } from "./desempenhoDoUsuRio/DesempenhoDoUsuRioCreate";
import { DesempenhoDoUsuRioEdit } from "./desempenhoDoUsuRio/DesempenhoDoUsuRioEdit";
import { DesempenhoDoUsuRioShow } from "./desempenhoDoUsuRio/DesempenhoDoUsuRioShow";
import { UsuRioList } from "./usuRio/UsuRioList";
import { UsuRioCreate } from "./usuRio/UsuRioCreate";
import { UsuRioEdit } from "./usuRio/UsuRioEdit";
import { UsuRioShow } from "./usuRio/UsuRioShow";
import { PlanoDeTreinoList } from "./planoDeTreino/PlanoDeTreinoList";
import { PlanoDeTreinoCreate } from "./planoDeTreino/PlanoDeTreinoCreate";
import { PlanoDeTreinoEdit } from "./planoDeTreino/PlanoDeTreinoEdit";
import { PlanoDeTreinoShow } from "./planoDeTreino/PlanoDeTreinoShow";
import { BibliotecaDeExercCiosList } from "./bibliotecaDeExercCios/BibliotecaDeExercCiosList";
import { BibliotecaDeExercCiosCreate } from "./bibliotecaDeExercCios/BibliotecaDeExercCiosCreate";
import { BibliotecaDeExercCiosEdit } from "./bibliotecaDeExercCios/BibliotecaDeExercCiosEdit";
import { BibliotecaDeExercCiosShow } from "./bibliotecaDeExercCios/BibliotecaDeExercCiosShow";
import { PerfilDoUsuRioList } from "./perfilDoUsuRio/PerfilDoUsuRioList";
import { PerfilDoUsuRioCreate } from "./perfilDoUsuRio/PerfilDoUsuRioCreate";
import { PerfilDoUsuRioEdit } from "./perfilDoUsuRio/PerfilDoUsuRioEdit";
import { PerfilDoUsuRioShow } from "./perfilDoUsuRio/PerfilDoUsuRioShow";
import { RealizaEsERecompensasList } from "./realizaEsERecompensas/RealizaEsERecompensasList";
import { RealizaEsERecompensasCreate } from "./realizaEsERecompensas/RealizaEsERecompensasCreate";
import { RealizaEsERecompensasEdit } from "./realizaEsERecompensas/RealizaEsERecompensasEdit";
import { RealizaEsERecompensasShow } from "./realizaEsERecompensas/RealizaEsERecompensasShow";
import { MetasFitnesList } from "./metasFitnes/MetasFitnesList";
import { MetasFitnesCreate } from "./metasFitnes/MetasFitnesCreate";
import { MetasFitnesEdit } from "./metasFitnes/MetasFitnesEdit";
import { MetasFitnesShow } from "./metasFitnes/MetasFitnesShow";
import { CompartilhamentoSocialList } from "./compartilhamentoSocial/CompartilhamentoSocialList";
import { CompartilhamentoSocialCreate } from "./compartilhamentoSocial/CompartilhamentoSocialCreate";
import { CompartilhamentoSocialEdit } from "./compartilhamentoSocial/CompartilhamentoSocialEdit";
import { CompartilhamentoSocialShow } from "./compartilhamentoSocial/CompartilhamentoSocialShow";
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
        title={"Treinador Pessoal"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ExercCio"
          list={ExercCioList}
          edit={ExercCioEdit}
          create={ExercCioCreate}
          show={ExercCioShow}
        />
        <Resource
          name="DesempenhoDoUsuRio"
          list={DesempenhoDoUsuRioList}
          edit={DesempenhoDoUsuRioEdit}
          create={DesempenhoDoUsuRioCreate}
          show={DesempenhoDoUsuRioShow}
        />
        <Resource
          name="UsuRio"
          list={UsuRioList}
          edit={UsuRioEdit}
          create={UsuRioCreate}
          show={UsuRioShow}
        />
        <Resource
          name="PlanoDeTreino"
          list={PlanoDeTreinoList}
          edit={PlanoDeTreinoEdit}
          create={PlanoDeTreinoCreate}
          show={PlanoDeTreinoShow}
        />
        <Resource
          name="BibliotecaDeExercCios"
          list={BibliotecaDeExercCiosList}
          edit={BibliotecaDeExercCiosEdit}
          create={BibliotecaDeExercCiosCreate}
          show={BibliotecaDeExercCiosShow}
        />
        <Resource
          name="PerfilDoUsuRio"
          list={PerfilDoUsuRioList}
          edit={PerfilDoUsuRioEdit}
          create={PerfilDoUsuRioCreate}
          show={PerfilDoUsuRioShow}
        />
        <Resource
          name="RealizaEsERecompensas"
          list={RealizaEsERecompensasList}
          edit={RealizaEsERecompensasEdit}
          create={RealizaEsERecompensasCreate}
          show={RealizaEsERecompensasShow}
        />
        <Resource
          name="MetasFitnes"
          list={MetasFitnesList}
          edit={MetasFitnesEdit}
          create={MetasFitnesCreate}
          show={MetasFitnesShow}
        />
        <Resource
          name="CompartilhamentoSocial"
          list={CompartilhamentoSocialList}
          edit={CompartilhamentoSocialEdit}
          create={CompartilhamentoSocialCreate}
          show={CompartilhamentoSocialShow}
        />
      </Admin>
    </div>
  );
};

export default App;
