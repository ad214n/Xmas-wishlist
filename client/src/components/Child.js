import React, { Component } from 'react';

class Child extends Component {

    constructor (props) {
        super(props);

        this.state = {
            name: props.name,
            desctription: props.description,
            age: props.age,
            items: props.items
        }
    }
  
    render() {
        return (
        // This is the HTML (as JSX) for a Child
        <div>
            <h3> This is a Child </h3>
            <p> I will show my info</p>
        </div>
        );
    }
}

export default Child;