import React, { Component } from 'react';
import UsersPage from './UsersPage'

class NavBar extends Component {
  render() {
    return (
      <div>
        <h1>Hello From Nav Bar!</h1>
        <UsersPage 
            username={"Sean"}
            age={23}
        />
        <br/>
        <UsersPage
            username={"test"}
            age={25}
        />
      </div>
    );
  }
}

export default NavBar;