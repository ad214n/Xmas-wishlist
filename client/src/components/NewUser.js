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
            <label class='text' for="name">Gym Name</label>
            <input type="text" id="name" name="gymName" />
          </div>
          <div>
            <label class='text' for="city">City</label>
            <input type="text" id="city" name="gymCity" />
          </div>
          <div>
            <label class='text' for="state">State</label>
            <input type="text" id="state" name="gymState" />
          </div>
          <input type="submit" value="Add Gym" />
        </form>
      </div>
    );
  }
}

export default NewUser;