import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeEdit from "../pages/BadgeEdit"
import BadgeNew from "../pages/BadgeNew";
import Layout from "./Layout";
import notFound from "../pages/notFound";
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/" component={Home} />
          <Route component={notFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
