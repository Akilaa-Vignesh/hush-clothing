import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
