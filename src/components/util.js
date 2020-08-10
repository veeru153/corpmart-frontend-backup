import Cookies from 'universal-cookie';
import Axios from '../axios';

const cookies = new Cookies();

const handleLogout = () => {
    cookies.remove('userToken');
    window.location.reload();
}

const validateToken = async () => {
    let token = await cookies.get('userToken');
    if(token && token != undefined) {
        let res = await Axios.get('/validate-token?format=json', {
            headers: {
                'Authorization': `Token ${token}`
            }
        }).catch((e) => e.response);
        return res;
    } else {
        cookies.remove('userToken');
        return false;
    }
}

export {
    handleLogout,
    validateToken,
}