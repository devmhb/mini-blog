import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import BCard from './pages/BCard/BCard';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/blog/:id">
          <BCard/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
