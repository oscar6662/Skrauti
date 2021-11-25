import { Route, Switch, Redirect } from 'react-router-dom';

import 'antd/dist/antd.css';

import Index from "./views/Index/Index";
import Layout from "./components/Layout/Layout";
import Stjorn from "./views/Stjorn/Stjorn";
import Greinar from "./views/Greinar/Greinar";

export default function App() {

  return (
    <Layout>
        <Switch>
          <Route exact path="/" children={ <Index/> } />
          <Route exact path="/stjorn" children={ <Stjorn/> } />
          <Route exact path="/greinar" children={ <Greinar/> } />
          <Redirect from="*" to="/"/>
        </Switch>
    </Layout>
  );
}
