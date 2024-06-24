import axios from 'axios';

export const APIClient = axios.create({
  baseURL: 'https://swapi.py4e.com/api/',
});

export const isAPIError = (error: any) => axios.isAxiosError(error);
