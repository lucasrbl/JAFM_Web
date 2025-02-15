import axios from 'axios';

export const getUsers = () => {
  axios.get('/teste').then(() => 'opa');
};
