import React, { Component } from 'react';

class NewUser extends Component {
  render() {
    return (
      // This is the HTML (as JSX) for the new user form
      // convert this to create a new user
      // action and inputs need to change
      <div>
        <h3>New User Sign Up</h3>
        <form action="/gyms/new" method="post">
          <div>
            <label class='text' for="name">Name</label>
            <input type="text" id="name" name="gymName" />
          </div>
          <div>
            <label class='text' for="age">Age</label>
            <input type="text" id="age" name="age" />
          </div>
          <div>
            <label class='text' for="email">E-mail</label>
            <input type="text" id="email" name="userEmail" />
          </div>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    );
  }
}

export default NewUser;