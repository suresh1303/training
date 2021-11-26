import React from "react";
import './form-styles.css';

class InputBox extends React.Component {   
    render() {
        return <div className="formElement">
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <input {...this.props} onInvalid={this.props.onInvalid} />
            <span className="inputError"></span>
        </div>;
    }
}

export default InputBox