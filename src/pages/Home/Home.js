import React, {Component} from "react";
import axios from "axios";
import "./Home.css"
import SearchBox from "../../components/SearchBox"
import SearchResult from "../../components/SearchResult/SearchResult";



class Home extends Component {
    state ={
        userInput:"",
        results:"",
        robotArr:[]
    }
    //method to handle/track the form input
    handleInputChange = event => {
        this.setState ({userInput: event.target.value})
    };
    //method for submit button
    handleFormSubmit = event => {
        event.preventDefault();
        console.log('calling the API')

        // Making the call to external API to get the photos:
        axios.get(`https://robohash.org/${this.state.userInput}?set=set2`)
            .then(res => {
                console.log('result',res)
                this.setState({results:res.config.url})
                this.state.robotArr.push(this.state.results);
                console.log("robot array:", this.state.robotArr)

        }) 
        .catch(error => console.log(error));      
    }
    handlePetFormSubmit = event => {
        event.preventDefault();
        console.log('calling the API')

        // Making the call to external API to get the photos:
        axios.get(`https://robohash.org/${this.state.userInput}?set=set4`)
            .then(res => {
                console.log('result',res)
                this.setState({results:res.config.url})
                this.state.robotArr.push(this.state.results);
        }) 
        .catch(error => console.log(error));      
    }
    render(){
        return (
            <container className="container-fluid">
                <div style={{textAlign:"center", marginTop:"150px"}}>
                    <h1 className="typewriter">Welcome to the world of Robots!</h1>
                    <br/>
                    <h2>let's have some fun with funny robots</h2>
                    <br/>
                    <SearchBox
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    handlePetFormSubmit={this.handlePetFormSubmit}
                    />
                    <SearchResult
                    results={this.state.results}
                    />
                    <div>
                    {this.state.robotArr.map(i => 
                    <img style={{width:"65px",height:"65px", marginRight:"10px"}} 
                    src={i} alt=""/>)}                       
                    </div>

                </div>
            </container>
        )
    }
}
    


export default Home;