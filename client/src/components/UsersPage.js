import React, { Component } from 'react';

class UsersPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.username,
            age: props.age
        }
    };

  render() {
    return (
      <div>
        <h1>Hello From {this.state.name}</h1>
        <h1>I am {this.state.age}</h1>
      </div>
    );
  }
}

export default UsersPage;