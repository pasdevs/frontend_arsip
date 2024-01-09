import axios from 'axios';

export const checkLoginStatus = async () => {
  try {
    const response = await axios.get('http://localhost:3001/auth/checkLoginStatus', { withCredentials: true });
    return response.data.loggedIn;
  } catch (error) {
    console.error('Error checking login status:', error.message);
    throw error;
  }
};