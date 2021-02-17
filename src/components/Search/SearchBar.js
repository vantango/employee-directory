import React from "react";
import "./style.css"

function SearchBar(props) {
    return (
        <div className="input-group">
            <input
                onChange={props.handleInputChange}
                name="search"
                value={props.search}
                type="text"
                className="form-control"
                placeholder="Enter a name"
                aria-describedby="button-addon2" />
            <button
                onClick={props.handleFormSubmit}
                className="btn btn-primary"
                type="button"
                id="button-addon2">Search</button>
        </div>
    );
}

export default SearchBar;