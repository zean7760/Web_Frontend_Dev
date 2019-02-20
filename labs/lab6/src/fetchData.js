import React, { Component } from 'react';
import './App.css';

class Person extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=500')
        .then(results => {
            return results.json();
    }).then(data => {
      let user = data.results.map((info) =>{
        return (
            <div key={info.results} className="list-img">
            <img src={info.picture.large} alt='random user images'/>
                <div className="list-username">
                    {info.name.first}
                    {" "}
                    {info.name.last}
                </div>
            </div>
        )
      })
        this.setState({data : user});
        console.log("state", this.state.data);
        })
    }

  render() {
    return (
      <div className="user-img">
        {this.state.data}
      </div>
    );
  }
}

export default Person;
