import React from "react";
import "./style.css"

function SearchBar(props) {
    return (
        <div className="input-group">
            <div className="container"  >
                <div className="row">
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
                    <button
                        onClick={props.sortLastNames}
                        className="btn btn-success"
                        type="button"
                        id="button-addon2">Sort by Last Name</button>
                    <button
                        onClick={props.sortFirstNames}
                        className="btn btn-danger"
                        type="button"
                        id="button-addon2">Sort by First Name</button>
                </div>
            </div>
        </div >
    );
}

export default SearchBar;