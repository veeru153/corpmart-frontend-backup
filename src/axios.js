import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://corpmart.el.r.appspot.com/api/v1'
})

export default instance;