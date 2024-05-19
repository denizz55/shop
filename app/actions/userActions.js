import axios from 'axios';
import Cookies from 'js-cookie';

export const login = (username, password) => async dispatch => {
  try {
    const { data } = await axios.post('https://fakestoreapi.com/auth/login', {
      username,
      password,
    });
    Cookies.set('token', data.token);
    dispatch({ type: 'SET_USER', payload: { user: { username }, token: data.token } });
  } catch (error) {
    console.error('Login error:', error);
  }
};

export const checkAuth = () => async dispatch => {
  const token = Cookies.get('token');
  if (token) {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/users/1', {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({ type: 'SET_USER', payload: { user: data, token } });
    } catch (error) {
      console.error('Auth check error:', error);
    }
  }
};
