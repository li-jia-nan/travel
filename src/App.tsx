import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCartPage,
  PlaceOrderPage,
} from './pages';
import { Redirect } from 'react-router-dom';
import { useSelector } from './redux/hooks';
import { useDispatch } from 'react-redux';
import { getShoppingCart } from './redux/shoppingCart/slice';

interface Props {
  component: React.FC<any>;
  isAuthenticated: boolean;
  path: string;
}

const PrivateRoute: React.FC<Props> = ({ component, isAuthenticated, ...rest }) => {
  const routeComponent = props => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/signIn' }} />
    );
  };
  return <Route render={routeComponent} {...rest} />;
};

const App: React.FC = () => {
  const jwt = useSelector(s => s.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt));
    }
  }, [dispatch, jwt]);

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route path="/search/:keywords?" component={SearchPage} />
          <PrivateRoute
            path="/shoppingCart"
            isAuthenticated={Boolean(jwt)}
            component={ShoppingCartPage}
          />
          <PrivateRoute
            path="/placeOrder"
            isAuthenticated={Boolean(jwt)}
            component={PlaceOrderPage}
          />
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
