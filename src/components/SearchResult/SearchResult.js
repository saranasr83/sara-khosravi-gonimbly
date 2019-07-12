import React from "react";
import "./SearchResult.css"

const SearchResult = props =>(
    <div>
        <img className="img-fluid"  src={props.results} alt="" />
    </div>
    
// {/* <ul>
//     {props.results.map(result => (
//         <li key={result}>
//             <img className="img-fluid" alt="dog" src={result} />
//         </li>
//     ))}
// </ul> */}
)

export default SearchResult;