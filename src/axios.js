import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://salty-inlet-27527.herokuapp.com/api/v1'
})

export default instance;