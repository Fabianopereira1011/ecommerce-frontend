
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./Pages/Home";

function App() {
  return (
     <Router>
      <div className="app">
          <Switch>
                      
          <Route path="/login">
            <h1>Tela de login</h1>
          </Route>

          <Route path="/checkout">
            <h1>Tela de check-out</h1>
          </Route> 
          
          <Route path="/">
            <Header/>
            <Home/>
          </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
