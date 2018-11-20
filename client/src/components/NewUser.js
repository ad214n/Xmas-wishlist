import React, { Component } from 'react';


class NewUser extends Component {
  render() {
    return (
      // This is the HTML (as JSX) for the new user form
      // convert this to create a new user
      // action and inputs need to change
      <div>
        <h3>New User Sign Up</h3>
        <form action="/api/child/create" method="post">
        <div>
            <label className='text' htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label className='text' htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label className='text' htmlFor="age">Age</label>
            <input type="text" id="age" name="age" />
          </div>
          <div>
            <label className='text' htmlFor="photo">Photo URL</label>
            <input type="text" id="photo" name="photo" />
          </div>
          <input type="submit" value="Create Account" />
        </form>
        
      </div>
    );
  }
}

export default NewUser;