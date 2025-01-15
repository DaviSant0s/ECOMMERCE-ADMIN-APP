import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../context/authContext/authTypes";
import { postRequest } from "./api"

export const login = async (userCredentials, dispatch) => {

    dispatch({ type: LOGIN_REQUEST });

    try {

        const data = await postRequest('http://localhost:3000/api/signin', userCredentials);

        if (!data || !data.token || !data.user){
            throw new Error('Invalid response from server');
        }

        const { token, user } = data;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        dispatch({ type: LOGIN_SUCCESS, payload: {
            token,
            user
        }});

    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: { error: error.message }});
    }

}


export const isUserLoggedIn = async (dispatch) => {

    const token = localStorage.getItem('token');

    if(token) {
        const user = JSON.parse(localStorage.getItem('user'));
        
        dispatch({ type: LOGIN_SUCCESS, payload: {
            token,
            user
        }});

    } else {
        dispatch({ type: LOGIN_FAILURE, payload: { error: 'Failed to login' }});
    }

}