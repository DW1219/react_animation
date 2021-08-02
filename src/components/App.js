//import './App.css';
//import MainPage from "./views/MainPage/MainPage.js";
import { Route, Switch } from "react-router-dom";
import MainPage from './views/MainPage';
import DesolvePage from './views/DesolveEffect/DesolveEffect';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={DesolvePage} />
    </div>
  );
}

export default App;
