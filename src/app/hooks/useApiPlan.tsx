import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPlan } from '../models/planModel';

export const useApiPlan = () => {
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<IPlan>();
  const url = 'https://rimac-front-end-challenge.netlify.app/api/plans.json'

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
