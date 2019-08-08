import React from "react";
import "./style.css";

function Jumbotron ({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid align-items-center" img-src="https://journalistsresource.org/wp-content/uploads/2019/02/susan-yin-647448-unsplash-1024x683.jpg">
            <div className="container text-center">
        {children}
        </div>
        </div>
    );
}

export default Jumbotron;