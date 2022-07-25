import axios from 'axios';

const URI = 'http://localhost:8000/login';

const login = async credentials => {
    const { data } = await axios.post(URI, credentials)
    return data
}

export default { login }