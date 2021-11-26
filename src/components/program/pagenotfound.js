import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './program.css';

const PageNotFound = () => {
    return <div className="formContainer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>Page Not Found</h4>
                    <p>The page you requested could not be found !</p>
                </div>
            </div>
        </div>
    </div>
}

export default PageNotFound;
