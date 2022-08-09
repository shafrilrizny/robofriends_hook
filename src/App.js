import React, { Component } from "react";
import Cardlist from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => {this.setState({robots: user})});
}

    onChangeSearch = (searched) => {
        this.setState({ searchfield: searched.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }) 

        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                < SearchBox searchChange = { this.onChangeSearch }/>
                < Cardlist robots = { filteredRobots } />
            </div>
        )
    }
}


export default App;