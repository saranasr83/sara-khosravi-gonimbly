import React from "react";
import "./SearchResult.css"

const SearchResult = props =>(
    <div className={props.results ? "animate" : ""} {...props}>
        <img className="img-fluid" style={props.style} src={props.results} alt="" />
    </div>
    
)

export default SearchResult;