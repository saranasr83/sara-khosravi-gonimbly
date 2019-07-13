import React from "react";
import "./SearchResult.css"

const SearchResult = props =>(
    <div>
        <img className="img-fluid"  src={props.results} alt="" />
    </div>
    
)

export default SearchResult;