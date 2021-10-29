import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Product from './pages/Product';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Cadastro />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
