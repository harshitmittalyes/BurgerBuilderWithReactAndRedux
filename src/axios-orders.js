import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-db308.firebaseio.com/'
});

export default instance;