import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import CookiesPage from './pages/CookiesPage';
import AboutUs from './pages/AboutUs';
import Adress from './pages/Endereço';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Product from './pages/Product';
import Admin from './pages/Admin';
import Sales from './pages/AdminSales';
import AdminProducts from './pages/AdminProducts';
import AdminClients from './pages/AdminClients';
import AddAddress from './pages/AddAddress/AddAddress';
import AddProduct from './pages/AddProduct/AddProduct';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/about-us">
          <AboutUs/>
        </Route>
        <Route path="/cookies-page">
          <CookiesPage/>
        </Route>
        <Route exact path="/add/product">
          <AddProduct />
        </Route>
        <Route exact path="/add/address">
          <AddAddress />
        </Route>
        <Route path="/adress">
          <Adress/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/admin-clients">
          <AdminClients/>
        </Route>
        <Route path="/admin-products">
          <AdminProducts/>
        </Route>
        <Route path="/admin-sales">
          <Sales/>
        </Route>
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
