import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Layout from "./component/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Reg">
            <Register />
          </Route>
          <Route path="/Detail/:idFilm">
            <Layout>
              <Detail />
            </Layout>
          </Route>
          <Route path="/Booking/:code">
            <Booking />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
