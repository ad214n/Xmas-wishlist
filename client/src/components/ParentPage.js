import React, { Component } from 'react';
import Child from './Child';

class ParentPage extends Component {

    constructor (props) {
        super(props);

        this.state = {
            user: "iasd82ekmaksdm"
        }
    }

    getUserInfo () {
        // this is a function to make a call to the Express Server for DB info
        // fetch or axios should be used
        // retrieve the data on the current user then setState with it
        // "data" from the DB will look like: 
        // {
        //     email: "tester@gmail.com",
        //     username: "tester",
        //     photo: "asdasdasd",
        //     children: [], 
        // }
        fetch(`/api/user/get/${this.state.user}`, {method: "GET"})
            .then(data => {
                this.setState(data);
            });
    }

    // before we render the page, run the getUserInfo function to pull the data
    componentDidMount() {
        this.getUserInfo();
    }
  
    render() {
        return (
        // This is the HTML (as JSX) for the current Parent page
        <div>
            <h1> This is the Parent Page </h1>
            <p> I will show the selected parent's info and kids</p>

            {/* 
                Loop through the "children" array
                For Each child create a Child component and pass props to it
                    you could use array.map or array.forEach
                
                <Child 
                    name=each.name,
                    desctription=each.description,
                    age=each.age,
                    items=each.items
                /> 
            */}
        </div>
        );
    }
}

export default ParentPage;