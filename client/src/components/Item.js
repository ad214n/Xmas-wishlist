import React, { Component } from 'react';
import axios from 'axios';

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
      handleDelete = ideaId => {
        // some unique value
        axios.delete(`/api/ideas/${ideaId}`).then(() => {
          //Remove the idea with ideaID from this.state.ideas
          const newIdeas = [...this.state.ideas]
          // Return only ideas that are NOT the id provided
          const filtered = newIdeas.filter(idea => {
            return idea._id !== ideaId // ! = =
          })
          // Take filtered data and set it to ideas
          this.setState({ideas: filtered})
        })
      }
    render() {
        return (
            <div>
            <input type="submit" value="Create Account" />
        {/* // This is the HTML (as JSX) for an Item
        // Need:
        //      Display props/state (the stuff from the model)
        //      Have buttons that Edit and Delete (then call to the right route) */}
        
    
            <p>This is an item</p>
        </div>
        );
    }
}

export default Item;