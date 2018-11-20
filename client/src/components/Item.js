import React, { Component } from 'react';

class Item extends Component {

    constructor (props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            email: props.email,
            age: props.age,
            photo: props.photo,
            items: props.items
        }
    }
  
    render() {
        return (
        // This is the HTML (as JSX) for an Item
        // Need:
        //      Display props/state (the stuff from the model)
        //      Have buttons that Edit and Delete (then call to the right route)
        <div>
            <p>This is an item</p>
        </div>
        );
    }
}

export default Item;