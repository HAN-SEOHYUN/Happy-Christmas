import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
