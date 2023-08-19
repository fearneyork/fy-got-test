import React, { useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getRandomQuote } from './utils/axios';
import useStore, { TGOTState } from './utils/store';
import { shallow } from 'zustand/shallow';
import { QuoteButton } from './components/quotes-button';


const selector = (state: TGOTState) => ({
  housesAndQuotes: state.housesAndQuotes,
  fetchIntialState: state.fetchIntialState,
});

function App() {
  const fetchIntialState = useStore(useCallback(state => state.fetchIntialState, []));
  const housesAndQuotes = useStore(state => state.housesAndQuotes)

  useEffect(() => {
    fetchIntialState()
  }, [fetchIntialState])

  return (<>
    <header>
      <h1></h1>
    </header>
    <main className="App">
      <section>
        <h2>Quote section</h2>
        <QuoteButton></QuoteButton>
      </section>
      <section>
        <h2>Houses section</h2>
        <>{JSON.stringify(housesAndQuotes)}</>
      </section>
    </main>
    <footer></footer>
  </>
  );
}

export default App;
