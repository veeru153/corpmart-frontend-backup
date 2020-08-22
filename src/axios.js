import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://db.corpmart.in/api/v1'
})

export default instance;