import axios from 'axios';

const baseUrl = 'https://segware-book-api.segware.io/api';

export const register = async(username, password) => {
    return await axios.post(baseUrl + '/sign-up', {
        username,
        password
    })
}

export const login = async(username, password) => {
    return await axios.post(baseUrl + '/sign-in', {
        username,
        password
    });
}

export const post = async(content) => {
    return await axios.post(baseUrl + '/feed', {
        content
    });
}