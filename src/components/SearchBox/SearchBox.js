import React from "react";
import "./SearchBox.css";

const SearchBox = props =>(
    <form className="search">
        <div className="form-group">
            <input 
            type="text"
            name="weather"
            placeholder="enter a funny word ..."
            value= {props.value}
            onChange={props.handleInputChange}
            />
            <button 
            className="btn" 
            type="submit" 
            onClick={props.handleFormSubmit}>
            Get Robot
            </button>
        </div>
        
    </form>
)

export default SearchBox;