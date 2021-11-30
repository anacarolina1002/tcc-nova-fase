import { createBrowserHistory } from 'history';

const logout = () => {
  localStorage.removeItem('@token/colearning')
  const history = createBrowserHistory();
  history.push("/home");
}

export { logout };