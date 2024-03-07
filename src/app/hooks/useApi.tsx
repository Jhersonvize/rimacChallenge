import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPlan } from '../models/planModel';

export const useApi = (url: string, execute: boolean = true) => {
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<IPlan>();
  
  useEffect(() => {
    (execute) && getData();
  }, []) // eslint-disable-line

  const getData = async () => {
    await axios.get(url)
      .then((response) => {
        setError('');
        setData(response?.data);
      })
      .catch((error) => {
        setError(error?.message);
      })
  };
  return { data, error, getData };
};
