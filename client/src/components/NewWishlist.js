import React, { Component } from 'react';
import Item from './Item';


class NewWishlist extends Component {
    constructor (props) {
        super(props);

        this.state = {
            user: props.match.params.id,
            name: "",
            email: "",
            age: "",
            photo: "",
            items: []
        }
    }

    getUserInfo() {
        const url = "/api/child/get/" + this.state.user;
        console.log(url);

        fetch(url, {method: "GET"})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    name: data.name,
                    email: data.email,
                    age: data.age,
                    photo: data.photo,
                    items: data.items
                });
            });
    }

    onDelete(id) {
        console.log("entering onDelete for", id);
        const currentList = this.state.items;
        let newList = [];

        currentList.forEach(element => {
            if (element !== id) {
                newList.push(element);
            }
        });

        this.setState({ items: newList });
    }

    componentDidMount() {
        this.getUserInfo();
    }

    render() {
        return (
        // This is the HTML (as JSX) for the new user form
        // convert this to create a new user
        // action and inputs need to change
        <div>
            <p>{this.state.name}</p>
            <p>{this.state.email}</p>
            <p>{this.state.age}</p>
            <img src={this.state.photo} alt={"userpic"}/>

            <hr/>

            <h3>Add Items to Wishlist</h3>
            <form action={"/api/item/create/" + this.state.user} method="post">
            <div>
                <label className='text' htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label className='text' htmlFor="price">Price</label>
                <input type="text" id="price" name="price" />
            </div>
            <div>
                <label className='text' htmlFor="description">Description</label>
                <input type="text" id="description" name="description" />
            </div>
            <div>
                <label className='text' htmlFor="photo">Photo URL</label>
                <input type="text" id="photo" name="photo" />
            </div>
            <input type="submit" value="Add Item" />
            </form>

            <hr/>

            {
                this.state.items.map((each, i) => {
                    return <Item 
                                key={i}
                                id={each._id}
                                name={each.name}
                                price={each.price}
                                description={each.description}
                                photo={each.photo}
                                onDelete={this.onDelete.bind(this)}
                            />
                })
            }
        
        </div>
        );
  }
}

export default NewWishlist;