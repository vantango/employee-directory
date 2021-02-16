import React from "react";
import "./style.css"

function Navbar() {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter a name" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
    );
}

export default Navbar;