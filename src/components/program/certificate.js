import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './program.css';
import store from '../../redux/store';
import SelectBox2 from "../../utilities/select2";

const Certificate = () => {
    const options = [{ title: 'One', value: 1 }, { title: 'Two', value: 2 }, { title: 'Three', value: 3 },];
    const [storeVal, setStoreVal] = useState([]);
    const showSelectedValue = () => { //Using Redux
        setStoreVal(store.getState());
    }
    return <div className="formContainer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>Certificate Page Heading</h4>
                    {storeVal.length !== 0 && <p>  The value of {storeVal.additional[storeVal.additional.length - 1].value} is {storeVal.additional[storeVal.additional.length - 1].text}</p>}
                    <form className="row g-3">
                        <div className="row">
                            <div className="col col-md-3 col-12">
                                <SelectBox2 setStoreValues={showSelectedValue} label="Additional option" options={options} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default Certificate;
