import { create } from "zustand";
import { THouseMemberSlug, THouseSlug, THousesList, TRandomQuote } from "./types";
import { getHousesList, getRandomQuote } from "./axios";

export type TGOTState = {
  loading: boolean
  housesAndQuotes: THousesList | null;
  currentRandomQuote: TRandomQuote | null
  fetchIntialState: () => Promise<void>
  getRandomQuote: () => Promise<void>
};

const applyQuote = (housesAndQuotes: THousesList, quote: TRandomQuote) => {
  const character = quote.character.name
  const house = quote.character.house

  const houseToUpdate = housesAndQuotes.findIndex(house => house.members.find(member => member.name === character));

}


const useStore = create<TGOTState>((set, get) => ({
  loading: false,
  currentRandomQuote: null,
  housesAndQuotes: null,
  fetchIntialState: async () => {
    set((_state) => ({ loading: true }))
    const houseResponse = await getHousesList();
    set((_state) => ({
      housesAndQuotes: houseResponse,
      loading: false
    }))
  },
  getRandomQuote: async () => {
    set((_state) => ({ loading: true }))
    const randomQuote = await getRandomQuote();
    const housesAndQuotesState = get().housesAndQuotes
    if (housesAndQuotesState !== null) {
      applyQuote(housesAndQuotesState, randomQuote)
    }
    set((_state) => ({
      loading: false,
      currentRandomQuote: randomQuote
    }))

  },
}));

export default useStore;