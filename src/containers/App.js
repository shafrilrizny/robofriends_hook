import React, { Component } from "react";
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        }) 

        return !robots.length ?
            <h1>loading... wait for the robots to engage...</h1> :
            (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    < SearchBox searchChange = { this.onChangeSearch }/>
                    <Scroll>
                        < Cardlist robots = { filteredRobots } />
                    </Scroll>
                </div>
            );
    }
}

export default App;