import React, { Component } from 'react'

class App extends Component{
    render(){
        return(
            <ul>
                <li>{false?'我是最帅的':'cool is me'}</li>
                <li>不服来战</li>
            </ul>
        )
    }
}

export default App