import React, {Component} from "react";
import axios from "axios";
import "./Home.css"
import SearchBox from "../../components/SearchBox"
import SearchResult from "../../components/SearchResult/SearchResult";



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
        //this one adds background
        // axios.get(`https://robohash.org/${this.state.userInput}?bgset=bg1`)
        //this one just regulat robots
        // axios.get(`https://robohash.org/${this.state.userInput}?ignoreext=false`)
        //this one for cats
        // axios.get(`https://robohash.org/${this.state.userInput}?set=set4`)
        //this one for funny faces
        axios.get(`https://robohash.org/${this.state.userInput}?set=set2`)

            .then(res => {
                console.log('result',res)
                this.setState({results:res.config.url})

        }) 
        .catch(error => console.log(error));      
    }
    render(){
        return (
            <div style={{textAlign:"center", marginTop:"150px"}}>
                <h1 className="typewriter">Welcome to the world of Robots!</h1>
                <br/>
                <h2>let's have some fun with funny robots</h2>
                <br/>
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