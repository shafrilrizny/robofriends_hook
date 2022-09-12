import React, { useState, useEffect } from "react";
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

function App () {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => {setRobots(user)});
},[count])

const onChangeSearch = (searched) => {
    setSearchfield(searched.target.value)
}

const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
}) 

return !robots.length ?
    <h1>loading... wait for the robots to engage...</h1> :
    (
        <div className="tc">
            <h1>RoboFriends</h1>
            < SearchBox searchChange = { onChangeSearch }/>
            <button 
                onClick={() => setCount(count+1)}>Click Me or Die!
            </button>
            <Scroll>
                <ErrorBoundry>
                    < Cardlist robots = { filteredRobots } />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;