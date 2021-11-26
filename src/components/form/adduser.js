import React, { useEffect, useState } from "react";
import { Button, Toast } from 'react-bootstrap';
import './form.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import InputBox from "../../utilities/input";
import SelectBox from "../../utilities/select";
//import InputBox from "../../utilities/input";

const AddUser = () => {

    const [errClass, setErrClass] = useState('hideError');
    const [errMsg, setErrMsg] = useState('');
    const [formData, setFormData] = useState({ name: "", email: "", gender: "", status: "" });
    const [name, setName] = useState(formData.name);
    const [email, setEmail] = useState(formData.email);
    const [gender, setGender] = useState(formData.gender);
    const [status, setStatus] = useState(formData.status);
    const [dataVal, setDataVal] = useState(false);
    const [userID, setUserID] = useState();
    const [toastVal, setToastVal] = useState({ status: false, header: "", message: "" });
    const [pageName, setPageName] = useState('Add User');
    const genderVal = [{ title: 'Male', value: 'male' }, { title: 'Female', value: 'female' }];
    const statusVal = [{ title: 'Active', value: 'active' }, { title: 'Inactive', value: 'inactive' }];
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dataVal === false)
            postData();
        else
            updateUser();

    }
    const postData = async (e) => {
        try {
            const accessToken = '9e99287bdd6384a489f60afe7af98550160f0e8cdfd45eb44dc665282be30b27';
            let apiData = await axios({
                url: 'https://gorest.co.in/public-api/users/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
                },
                data: formData
            });

            if (apiData.data.code === 422) {
                setErrMsg('The email address entered is already in use');
                setErrClass('showError');
            }
            else {
                setErrClass('hideError');
                setToastVal({ status: true, header: "User added", message: "You have added user" });
                setTimeout(function () { setToastVal({ ...toastVal, status: false }); history.push('/'); }, 3000);
            }
        }
        catch (error) {
            setErrMsg('There was an error while submitting the form. ' + error);
            setErrClass('showError');
        }
    }

    const updateUser = async (e) => {
        try {
            const accessToken = '9e99287bdd6384a489f60afe7af98550160f0e8cdfd45eb44dc665282be30b27';
            let apiData = await axios({
                url: 'https://gorest.co.in/public-api/users/' + userID,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
                },
                data: formData
            });
            console.log(apiData);
            if (apiData.data.code === 422) {
                setErrMsg('The email address entered is already in use');
                setErrClass('showError');
            }
            else {
                setErrClass('hideError');
                setToastVal({ status: true, header: "User updated", message: "You have updated user" });
                setTimeout(function () { setToastVal({ ...toastVal, status: false }); history.push('/'); }, 3000);
            }
        }
        catch (error) {
            setErrMsg('There was an error while updating the data. ' + error);
            setErrClass('showError');
        }
    }

    const setData = (e) => {
        if (e.target.checkValidity() === true) e.target.nextSibling.innerHTML = '';
        if (e.target.name === 'name') setName(e.target.value);
        if (e.target.name === 'email') setEmail(e.target.value);
        if (e.target.name === 'gender') setGender(e.target.value);
        if (e.target.name === 'status') setStatus(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const validateField = (e) => {
        e.preventDefault();
        e.target.nextSibling.innerText = e.target.dataset.error;
    }

    const getUserData = async (id) => {
        try {
            let apiData = await axios({
                url: 'https://gorest.co.in/public-api/users/' + id,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setErrClass('hideError');
            const userData = apiData.data.data;
            setName(userData.name);
            setEmail(userData.email);
            setGender(userData.gender);
            setStatus(userData.status);
            setFormData({ name: userData.name, email: userData.email, gender: userData.gender, status: userData.status });
        }
        catch (error) {
            setErrMsg('There was an error while retrieving data. ' + error);
            setErrClass('showError');
        }
    }

    useEffect(() => {
        const userId = new URLSearchParams(window.location.search);
        const user = userId.get('id');
        if (user != null) {
            getUserData(user);
            setDataVal(true);
            setPageName('Edit User');
            setUserID(user);
        }
    }, []);

    return <div className="userFormContainer">
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-12">
                        <h4>{pageName}</h4>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className={'col col-md-6 col-12 ' + errClass}>
                        <h5>Error</h5>
                        <p>{errMsg}</p>
                    </div>
                    <div className="col col-md-6 col-12">
                        <Toast show={toastVal.status} >
                            <Toast.Header>
                                <strong className="me-auto">{toastVal.header}</strong>
                            </Toast.Header>
                            <Toast.Body>{toastVal.message} {name}</Toast.Body>
                        </Toast>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-6 col-12">
                        <InputBox label="Name:" type="text" name="name" data-error="Enter a name" defaultValue={name} autoComplete="off" onInvalid={validateField} onChange={setData} required />

                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-6 col-12">
                        <InputBox label="Email:" type="email" name="email" data-error="Enter a valid email address" defaultValue={email} autoComplete="off" onInvalid={validateField} onChange={setData} pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />

                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-6 col-12">
                        <SelectBox label="Gender:" options={genderVal} name="gender" data-error="Select a gender" value={gender} onInvalid={validateField} onChange={setData} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-6 col-12">
                        <label htmlFor="status">Status: </label>
                        <SelectBox options={statusVal} name="status" data-error="Select a status" value={status} onInvalid={validateField} onChange={setData} required />
                    </div>
                </div>
                <div className="row buttonRow">
                    <div className="col col-md-6 col-12">
                        <Button type="submit">Submit</Button>
                    </div>
                </div>
            </div>
        </form>
    </div>
}

export default AddUser