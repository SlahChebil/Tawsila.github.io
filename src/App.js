import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Components/Home/Footer';
import Search from './Components/SearchPage/Search';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/search">
              <Header/>
              <Search/>
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
