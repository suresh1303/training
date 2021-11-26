import React, { useState, useEffect } from "react";
//import axios from 'axios';
import formData from './data.json';

const TableData = () => {

    //const [val, setVal] = useState(false);
    const [dataVal, setDataVal] = useState([]);

    
    /*
    const getApiData = async () => {
        let apiData = await axios({
            url: 'https://gorest.co.in/public-api/users?page=1',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        //setDataVal(apiData.data.data);
    }
    */

    useEffect(() => {
        //getApiData();   
    }, []);

    return <div>

        <ul className="nameList">            
            {dataVal.length!==0 && dataVal.data.map((e, index) => (index < 5 &&
                <li key={index} data-testid={`list-item-${index}`}>{e.name}</li>
            ))}
        </ul>
        <p><button className="btn btn-primary" onClick={(e) => setDataVal(formData)}>Click Me</button></p>
        
    </div>

}


export default TableData