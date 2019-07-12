import React, {Component} from "react";
import SearchBox from "../components/SearchBox"

class Home extends Component {
    state ={
        userInput:"",

    }

    handleInputChange = event => {
        this.setState ({userInput: event.target.value})
    };
    render(){
        return (
            <div>
                <h1>Welcome to Weather Finder App!</h1>
                <h2>let's check the weather ...</h2>
                <SearchBox
                handleInputChange={this.handleInputChange}
                />
            </div>
            
        )
    }
}
    


export default Home;