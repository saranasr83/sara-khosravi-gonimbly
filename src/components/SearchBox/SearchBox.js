import React from "react";
import "./SearchBox.css";

const SearchBox = props =>(
    <form className="search w3-animate-top">
        <div className="form-group">
            <input 
            style={{height:"50px",width:"250px", opacity:".7" }}
            type="text"
            name="robot"
            placeholder="enter a funny word ..."
            value= {props.value}
            onChange={props.handleInputChange}
            />
            <button 
            className="btn" 
            type="submit" 
            onClick={props.handleFormSubmit}>
            <strong>Get Robot</strong>
            </button>
        </div>
        
    </form>
)

export default SearchBox;