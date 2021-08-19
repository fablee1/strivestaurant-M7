import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Reservations from "./components/Reservations"
import Menu from "./components/Menu"

function App() {
  return (
    <div>
      <Router>
        <MyNav title="Strivestaurant" />
        <Switch>
          <Route exact path="/">
            <Home title="Strivestaurant" />
          </Route>
          <Route exact path="/reservations">
            <Reservations />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
