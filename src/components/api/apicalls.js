import axios from 'axios';

export const gridData = async () => {
    let apiData = await axios({
        url: 'https://gorest.co.in/public-api/users?page=1',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return apiData;
}

export const deleteUser = async (userID) => {
    const accessToken = '9e99287bdd6384a489f60afe7af98550160f0e8cdfd45eb44dc665282be30b27';
    await axios({
        url: 'https://gorest.co.in/public-api/users/' + userID,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
        }
    });
}

