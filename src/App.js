import "./App.css";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import Nav from "./pages/Nav";

import history from "./history";
import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Nav />
      <Switch>
        <Route path="/todos" component={Todos} />
        <Route path="/users" component={Users} />
        <Route path="/" exact component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
