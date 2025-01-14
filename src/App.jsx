import { Switch } from "wouter";
import { Route } from "wouter";
import { Main } from "./pages/Main";
import { Redirect } from "wouter";

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />

      {/* Default route in a switch */}
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
