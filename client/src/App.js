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
      <Router>
        <div>
          <SiteHeader />
          <NavBar />
          <Switch>
              <Route exact path="/" component={NewUser} />
              <Route exact path="/all" component={OtherWishlists} />
              <Route path="/user/:id" component={NewWishlist} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
