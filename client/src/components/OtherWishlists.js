import React, { Component } from 'react';
import Child from './Child';

class OtherWishlists extends Component {
  constructor (props) {
    super(props);

    this.state = {
        children: []
    }
}

  getAllChildren() {
    fetch(`/api/children`, {method: "GET"})
      .then(res => res.json())
      .then(data => {
          this.setState({children: data});
      });
  }

  componentDidMount() {
    this.getAllChildren();
  }

  render() {
    return (
      <div>
        {this.state.children.map((each,i) => {
          console.log(each);
          return <Child 
                    key={i}
                    name={each.name}
                    email={each.email}
                    age={each.age}
                    photo={each.photo}
                    items={each.items}
                  />
        })}
      </div>
    );
  }
}

export default OtherWishlists;