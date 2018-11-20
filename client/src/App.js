import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OtherWishlists from './components/OtherWishlists';
import SiteHeader from './components/SiteHeader';
import NewUser from './components/NewUser';
import NavBar from './components/NavBar';
import NewWishlist from './components/NewWishlist';


class App extends Component {
  render() {
    return (
      // this is where you build your main page (header, footer, etc)
      // everything that happens in your app will happen from inside this shell component
      // you will only ever use App once
      <Router>
        <div>
          <SiteHeader />
          <NavBar />
          <Switch>
              <Route exact path="/" component={NewUser} />
              <Route exact path="/all" component={OtherWishlists} />
              <Route exact path="/user/create" component={NewWishlist} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
