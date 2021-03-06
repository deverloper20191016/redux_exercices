import "./App.css";
import Navigation from "./shared/Navigation";
import MainRouter from "./shared/MainRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <MainRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
