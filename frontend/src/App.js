import Home from './screens/home';
import View from './screens/view';
import Navbar from './layout/navbar';
import Header from './layout/header';
import {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './app.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/view" component={View} exact />
        </Switch>
      </Router>
    </Fragment>
  );
}
export default App;
