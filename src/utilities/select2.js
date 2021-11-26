import React from "react";
import './form-styles.css';
import store from '../redux/store';
import * as actions from '../redux/actiontypes';

class SelectBox2 extends React.Component {
    onSelectChange = (e) => {
        store.dispatch({
            type: actions.SELECT2_CHANGED,
            payload: {
                value: this.props.label,
                text: e.target.options[e.target.selectedIndex].text
            }
        });
        this.props.setStoreValues();
    }
    render() {
        return <div className="formElement">
            <label>{this.props.label}</label>
            <select onChange={this.onSelectChange} {...this.props} onInvalid={this.props.onInvalid}>
                <option value="">--Select--</option>
                {this.props.options.map((e, index) => (
                    <option key={index} value={e.value}>{e.title}</option>
                ))}
            </select>
            <span className="inputError"></span>
        </div>;
    }
}

export default SelectBox2