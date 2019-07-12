import React, {Component} from "react";
import axios from "axios";
import SearchBox from "../components/SearchBox"
import SearchResult from "../components/SearchResult/SearchResult";



class Home extends Component {
    state ={
        userInput:"",
        results:""
    }

    handleInputChange = event => {
        this.setState ({userInput: event.target.value})
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('calling the API')
        
        axios.get(`https://robohash.org/${this.state.userInput}?bgset=bg1`)
        // axios.get("https://www.metaweather.com/api/location/2487956/", {responseType: 'json'})
            .then(res => {
                console.log('result',res)
                this.setState({results:res.config.url})

        }) 
        .catch(error => console.log(error));      
    }
    render(){
        return (
            <div style={{textAlign:"center"}}>
                <h1>Welcome to the world of Robots!</h1>
                <h2>let's have some fun by watching robots</h2>
                <SearchBox
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
                <SearchResult
                results={this.state.results}
                />
            </div>
            
        )
    }
}
    


export default Home;