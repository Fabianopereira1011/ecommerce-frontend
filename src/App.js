
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

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
            <h1>Pagina Principal</h1>
          </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
