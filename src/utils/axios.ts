import axios from 'axios';
import { THousesList, TRandomQuote } from './types';
import { API_ERROR, BASE_URL } from './constants';


export const getRandomQuote = async (): Promise<TRandomQuote> => {
  try {
    const res = await axios.get<TRandomQuote>(`${BASE_URL}/random`)
    return res?.data;
  } catch (error) {
    throw new Error(API_ERROR);
  };
};

export const getHousesList = async (): Promise<THousesList> => {
  try {
    const res = await axios.get<THousesList>(`${BASE_URL}/houses`)
    return res?.data;
  } catch (error) {
    throw new Error(API_ERROR);
  };
};