import React, { Component } from 'react';


class NewWishlist extends Component {
    constructor (props) {
        super(props);

        this.state = {
            user: props.match.params.id
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

    componentWillMount() {
        this.getUserInfo();
    }

    render() {
        return (
        // This is the HTML (as JSX) for the new user form
        // convert this to create a new user
        // action and inputs need to change
        <div>
            <h3>New Wishlist</h3>
            <form action="/api/child/create" method="post">
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
            <input type="submit" value="Create Account" />
            </form>

            <p>{this.state.name}</p>
            <p>{this.state.email}</p>
            <p>{this.state.age}</p>
            <img src={this.state.photo} alt={"userpic"}/>
        
        </div>
        );
  }
}

export default NewWishlist;