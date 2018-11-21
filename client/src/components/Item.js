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

      handleUpdate = (ideaId) => {
        // Find the individual updated idea from this.state.ideas
        const ideaToUpdate = this.state.ideas.find(idea => {
          return idea._id === ideaId
        })
        // axios post the endpoint with updated data
        axios.patch(`/api/ideas/${ideaId}`, ideaToUpdate).then(() => {
          console.log("Updated Idea")  
        })
        // console .log saved
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
                <h3>{`${this.state.id} ${this.state.name} ${this.state.price} ${this.state.description} ${this.state.photo}`}</h3>
                <button onClick={this.handleDelete}>Update</button>
                <button onClick={this.handleDelete}>Delete</button>
                <hr/>
            </div>
        );
    }
}

export default Item;