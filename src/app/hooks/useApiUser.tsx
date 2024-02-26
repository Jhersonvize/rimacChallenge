import axios from 'axios';
import { useEffect, useState } from 'react';
import { IUser } from '../models/userModel';

export const useApiUser = () => {
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<IUser>();
  const url = 'https://rimac-front-end-challenge.netlify.app/api/user.json'

  useEffect(() => {
    getData(url);
  },[] );

  const getData = (url: string) => {
    axios({
      method: 'GET',
      url,
    })
      .then((response) => {
        setError('');
        setData(response?.data);
      })
      .catch((error) => {
        setError(error.message);
      })
  };
  return { data, error };
};
