import axios from "axios";
import { THousesList, TRandomQuote } from "./types";

const BASE_URL = 'https://api.gameofthronesquotes.xyz/v1'

export const getRandomQuote = async (): Promise<TRandomQuote> => {
  try {
    const { data } = await axios.get<TRandomQuote>(`${BASE_URL}/random`)
    return data;
  } catch (error) {
    throw new Error('Some witty GoT themed error message')
  };
};

export const getHousesList = async (): Promise<THousesList> => {
  try {
    const { data } = await axios.get<THousesList>(`${BASE_URL}/houses`)
    return data;
  } catch (error) {
    throw new Error('Some witty GoT themed error message')
  };
};