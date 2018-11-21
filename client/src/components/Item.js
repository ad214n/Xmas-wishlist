import React, { Component } from 'react';
import axios from 'axios';

class Item extends Component {

    constructor (props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            price: props.price,
            description: props.description,
            photo: props.photo
        }
    }

    handleUpdate = () => {
        axios.post(`/api/item/update/${this.state.id}`,
        {
            name: document.getElementById(this.state.id + "_name").value,
            price: document.getElementById(this.state.id + "_price").value,
            description: document.getElementById(this.state.id + "_desc").value,
            photo: document.getElementById(this.state.id + "_photo").value,
        })
    }

    handleDelete = () => {
        axios.post(`/api/item/delete/${this.state.id}`)
            .then(() => {
                console.log("deleting", this.state.id);
                this.props.onDelete(this.state.id)
            })
    }

    render() {
        return (
            <div>
                <hr/>
                <input type="text" id={this.state.id + "_name"} placeholder={this.state.name}></input>
                <input type="text" id={this.state.id + "_price"} placeholder={this.state.price}></input>
                <input type="text" id={this.state.id + "_desc"} placeholder={this.state.description}></input>
                <input type="text" id={this.state.id + "_photo"} placeholder={this.state.photo}></input>
                <button onClick={this.handleUpdate}>Update</button>
                <button onClick={this.handleDelete}>Delete</button>
                <hr/>
            </div>
        );
    }
}

export default Item;