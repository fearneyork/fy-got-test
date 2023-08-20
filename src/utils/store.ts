import { create } from "zustand";
import { THousesList, TRandomQuote } from "./types";
import { getHousesList, getRandomQuote } from "./axios";

export type TGOTState = {
  loading: boolean
  housesAndQuotes: THousesList | null;
  currentRandomQuote: TRandomQuote | null
  fetchIntialState: () => Promise<void>
  getRandomQuote: () => Promise<void>
};

const applyQuote = (housesAndQuotes: THousesList, randomQuote: TRandomQuote) => {
  const memberSlug = randomQuote.character.slug;
  const houseSlug = randomQuote.character.house.slug;
  const quote = randomQuote.sentence;
  const updatedHouses = [...housesAndQuotes];

  const houseIndex = housesAndQuotes.findIndex(house => house.slug === houseSlug);
  const memberIndex = housesAndQuotes[houseIndex].members.findIndex(member => member.slug === memberSlug);
  const existingQuotes = updatedHouses[houseIndex].members[memberIndex].quotes

  if (existingQuotes !== undefined) {
    updatedHouses[houseIndex].members[memberIndex].quotes = [...existingQuotes, quote]
  } else {
    updatedHouses[houseIndex].members[memberIndex] = {
      ...updatedHouses[houseIndex].members[memberIndex],
      quotes: [quote]
    }
  }
  return updatedHouses
};


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
      set((_state) => ({ housesAndQuotes: applyQuote(housesAndQuotesState, randomQuote) }))
    }
    set((_state) => ({
      loading: false,
      currentRandomQuote: randomQuote
    }))

  },
}));

export default useStore;