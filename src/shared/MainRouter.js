import { Route, Switch } from "react-router-dom";
import AboutPage from "../components/AboutPage";
import Home from "../components/Home";
import ProductPage from "../components/ProductPage";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/product" component={ProductPage} />
    </Switch>
  );
};

export default MainRouter;
