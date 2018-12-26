import URL from '../constants/URL';
import axios from 'axios';
export default function callApi(endpoint, method, body) {
    return axios({
        method: method,
        url: `${URL.ROOT_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    })
}