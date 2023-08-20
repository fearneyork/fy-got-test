import axios from 'axios';
import { API_ERROR } from './constants';
import { getRandomQuote, getHousesList } from './axios';
import { getHousesListMockData, getRandomQuoteMockData } from './mockData';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('getRandomQuote', () => {
  it("checks if API returns expected data", async () => {
    const resolve = { data: getRandomQuoteMockData };

    axiosMock.get.mockImplementationOnce(() => Promise.resolve(resolve));
    await expect(getRandomQuote()).resolves.toEqual(getRandomQuoteMockData);
    expect(axiosMock.get).toHaveBeenCalled();
  });
  it("checks if API rejects with error message", async () => {

    axiosMock.get.mockImplementationOnce(() => Promise.reject());
    await expect(getRandomQuote()).rejects.toThrowError(API_ERROR);
    expect(axiosMock.get).toHaveBeenCalled();
  });

});

describe('getHousesList', () => {
  it("checks if API returns expected data", async () => {
    const resolve = { data: getHousesListMockData };

    axiosMock.get.mockImplementationOnce(() => Promise.resolve(resolve));
    await expect(getHousesList()).resolves.toEqual(getHousesListMockData);
    expect(axiosMock.get).toHaveBeenCalled();
  });
  it("checks if API rejects with error message", async () => {

    axiosMock.get.mockImplementationOnce(() => Promise.reject());
    await expect(getHousesList()).rejects.toThrowError(API_ERROR);
    expect(axiosMock.get).toHaveBeenCalled();
  });

});