import { Route, Switch, Redirect } from 'react-router-dom';

import Index from "./views/Index/Index";
import Layout from "./components/Layout/Layout";
//import Stjorn from "./views/Stjorn/Stjorn";

export default function App() {

  return (
    <Layout>
        <Switch>
          <Route exact path="/" children={ <Index/> } />
          <Redirect from="*" to="/"/>
        </Switch>
    </Layout>
  );
}
