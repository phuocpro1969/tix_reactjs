import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Reg">
            <Register />
          </Route>
          <Route path="/Booking/:code">
            <Booking />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
