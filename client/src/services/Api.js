/* eslint-disable max-len */
import axios from 'axios';
import { BASE_API_URL } from '../constants/api';

export function checkStatus(responseData) {
  if (responseData.status >= 200 && responseData.status < 300) { return { data: responseData.data, headers: responseData.headers, status: responseData.status }; }

  const error = new Error((responseData.data.response && responseData.data.response.message) || '');

  error.response = responseData.data;
  throw error;
}

export function processRequest(url = '', method = 'GET', data = {}) {
  const accessToken = localStorage.getItem('access_token');
  let headers = {
    'Content-Type': 'application/json',
  };

  if (url !== 'authentication') { headers = { ...headers, Authorization: `Bearer ${accessToken}` }; }

  return axios({
    method,
    data: JSON.stringify(data),
    headers,
    crossDomain: true,
    url: BASE_API_URL + url,
  }).then(res => checkStatus(res));
}
