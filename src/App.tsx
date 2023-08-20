import { useCallback, useEffect } from 'react';
import './App.css';
import useStore from './utils/store';
import styled from 'styled-components';
import QuotesSection from './components/quotes-section';
import HouseSection from './components/houses-section';
import { BLACK } from './utils/constants';

const Container = styled.div`
height: 100%;
width: 100%;
`;

const Header = styled.header`
background-color: ${BLACK};
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

  useEffect(() => {
    fetchIntialState()
  }, [fetchIntialState])

  return (
    <Container>
      <head>
        <title>Game of Quotes</title>
      </head>
      <Header>
        <HeaderText>Game of Quotes</HeaderText>
      </Header>
      <main className='App'>
        <QuotesSection />
        <HouseSection />
      </main>
      <footer></footer>
    </Container>
  );
}

export default App;
