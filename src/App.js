import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { ProvideAuth } from './context/ProvideAuth';
import Login from './views/Auth/Login';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
