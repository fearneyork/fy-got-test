import { useCallback, useEffect } from 'react';
import './App.css';
import useStore from './utils/store';
import { QuoteButton } from './components/quotes-button';
import { CurrentRandomQuote } from './components/current-random-quote';
import styled from 'styled-components';
import QuotesSection from './components/quotes-section';
import HouseSection from './components/houses-section';

const Container = styled.div`
  background-color: rgb(20 20 20);
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;

const HeaderText = styled.h1`
  font-family: GameOfThrones;
  color: rgb(230 230 230);
  align-self: center;
`;

function App() {
  const fetchIntialState = useStore(useCallback(state => state.fetchIntialState, []));
  const housesAndQuotes = useStore(state => state.housesAndQuotes)

  useEffect(() => {
    fetchIntialState()
  }, [fetchIntialState])

  return (
    <Container>
      <Header>
        <HeaderText>Game of Quotes</HeaderText>
      </Header>
      <main className="App">
        <QuotesSection />
        <HouseSection />
      </main>
      <footer></footer>
    </ Container >
  );
}

export default App;
