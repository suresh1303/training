import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './program.css';
import TableData from '../../testing/table';

const Program = () => {
    return <div className="formContainer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>Program Page Heading</h4>
                    <TableData/>
                </div>
            </div>
        </div>
    </div>
}

export default Program;
