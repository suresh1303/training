import React, { useState } from "react";
import { Button, Toast } from 'react-bootstrap';
import { AgGridReact } from 'ag-grid-react';
import '../../../node_modules/ag-grid-community/dist/styles/ag-grid.css';
import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css';
import './form.css';
import SelectBox from "../../utilities/select";
import InputBox from "../../utilities/input";
import heading from './heading.json';
import store from '../../redux/store';
//import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { gridData, deleteUser } from '../api/apicalls';

const SearchForm = (props) => {

    const [dataVal, setDataVal] = useState([]);
    const [storeVal, setStoreVal] = useState([]);
    const [classname, setClass] = useState('hideData');
    const [errClass, setErrClass] = useState('hideError');
    const [toastClass, setToastClass] = useState(false);
    const [delID, setDelID] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const options = [{ title: 'One', value: 1 }, { title: 'Two', value: 2 }, { title: 'Three', value: 3 },];
    const deleteAction = 'Delete';
    const editAction = 'Edit';
    let history = useHistory();

    /* Data Grid initialization */
    let rowData = dataVal;
    const columnDefs = [
        { headerName: 'ID', field: 'id', sortable: true },
        { headerName: 'Name', field: 'name', sortable: true },
        { headerName: 'Email', field: 'email', sortable: true },
        { headerName: 'Status', field: 'status', sortable: true },
        {
            headerName: 'Action', field: 'id',
            cellRendererFramework: (e) => <div data-testid="deletebutton">
                <button data-testid={'data-item-'+e.node.rowIndex} className="btn btn-primary" onClick={deleteData}>{deleteAction}</button> <button className="btn btn-primary" onClick={editUser}>{editAction}</button>
            </div>
        }
    ];

    /* Get API data */
    const getGridData = () => {
        gridData()
            .then((response) => {
                setDataVal(response.data.data);
                setClass('showData');
                setErrClass('hideError');
            })
            .catch((error) => {
                setErrMsg('There was an error while retrieving data. ' + error);
                setErrClass('showError');
            });
    }
    const deleteData = (e) => {
        const userID = e.target.closest('.ag-row').firstElementChild.innerHTML;
        setDelID(userID);
        deleteUser(userID)
            .then((response) => {
                getGridData();
                setToastClass(true);
                setTimeout(function () { setToastClass(false); }, 3000);
            })
            .catch((error) => {
                setErrMsg('There was an error while deleting data. ' + error);
                setErrClass('showError');
            });
    }

    /*
    const getData = async () => {
        try {
            let apiData = await axios({
                url: 'https://gorest.co.in/public-api/users?page=1',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setDataVal(apiData.data.data);
            setClass('showData');
            setErrClass('hideError');
        }
        catch (error) {
            setErrMsg('There was an error while retrieving data. ' + error);
            setErrClass('showError');
        }
    }*/

    /*
        const deleteUser = async (e) => {
            const accessToken = '9e99287bdd6384a489f60afe7af98550160f0e8cdfd45eb44dc665282be30b27';
            const userID = e.target.closest('.ag-row').firstElementChild.innerHTML;
            setDelID(userID);
            try {
                let apiData = await axios({
                    url: 'https://gorest.co.in/public-api/users/' + userID,
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + accessToken,
                    }
                });
                console.log("Delete User", apiData);
                getGridData();
                setToastClass(true);
                setTimeout(function () { setToastClass(false); }, 5000);
            }
            catch (error) {
                setErrMsg('There was an error while deleting data. ' + error);
                setErrClass('showError');
            }
        }
    */

    const showSelectedValue = () => { //Using Redux
        setStoreVal(store.getState());
    }

    const addUserPage = () => {
        history.push('/adduser');
    }

    const editUser = (e) => {
        const userID = e.target.closest('.ag-row').firstElementChild.innerHTML;
        history.push('/adduser?id=' + userID);
    }

    return <div className="formContainer">
        <div className="container">
            <span className="greeting">Welcome {heading.name}</span>
            <div><h4>{heading.plan}</h4>
                <span className="displayValue">
                    {dataVal.length !== 0 && console.log( dataVal[0].name)}
                    {storeVal.length !== 0 && <span>  The value of {storeVal.main[storeVal.main.length - 1].value} is {storeVal.main[storeVal.main.length - 1].text}</span>}

                    {/*storeVal.map((e, index) => (((index + 1) === storeVal.length) &&
                        <span key={index}>  The value of {e.value} is {e.text}</span>
                    ))*/}
                </span></div>
            <form className="row g-3">
                <div className="row">
                    <div className="col col-md-3 col-12"><SelectBox setStoreValues={showSelectedValue} label="Plan Code" options={options} /></div>
                    <div className="col col-md-3 col-12"><SelectBox setStoreValues={showSelectedValue} label="Plan Name" options={options} /></div>
                    <div className="col col-md-3 col-12"><InputBox label="Client Name" type="password" id="password" /></div>
                    <div className="col col-md-3 col-12"><SelectBox setStoreValues={showSelectedValue} label="Program Name" options={options} /></div>
                </div>
                <div className="row">
                    <div className="col col-md-3 col-12"><SelectBox setStoreValues={showSelectedValue} label="Record" options={options} /></div>
                    <div className="col col-md-3 col-12"><SelectBox setStoreValues={showSelectedValue} label="Status" options={options} /></div>
                </div>
                <div className="row buttonRow">
                    <Button onClick={(e) => { addUserPage() }}>Add User</Button>
                    <Button onClick={(e) => { getGridData() }}>Search</Button>
                    <Button onClick={(e) => setClass('hideData')}>Clear</Button>
                </div>
            </form>
            <div className={errClass}>
                <h5>Error</h5>
                <p>{errMsg}</p>
            </div>

            <Toast show={toastClass} >
                <Toast.Header>
                    <strong className="me-auto">User Deleted</strong>
                </Toast.Header>
                <Toast.Body>You have deleted user with ID: {delID}</Toast.Body>
            </Toast>

            <div className={classname} >
                <p className="tableHdg">Data Table</p>
                <div className="ag-theme-alpine data-table" data-testid="datatable">
                    <AgGridReact rowData={rowData} columnDefs={columnDefs} reactUi="true" paginationPageSize="10" pagination={true} >
                    </AgGridReact>
                </div>
            </div>
        </div>
    </div>;
}

export default SearchForm