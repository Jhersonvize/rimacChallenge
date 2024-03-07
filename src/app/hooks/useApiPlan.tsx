import axios from 'axios';
import { useRef, useState } from 'react';
import { IPlan } from '../models/planModel';

export const useApiPlan = () => {
  const [error, setError] = useState<string>('');
  const data = useRef<IPlan>();

  const getData = async () => {
    const url = 'https://rimac-front-end-challenge.netlify.app/api/plans.json'

    await axios.get(url)
      .then((response) => {
        setError('');
        data.current = response?.data;
      })
      .catch((error) => {
        setError(error.message);
      })
  };
  return { data, error, getData };
};
