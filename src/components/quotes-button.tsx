import { styled } from 'styled-components';
import useStore from '../utils/store';

const Button = styled.button`
  height: 50px;
  width: 300px;
  border-width: 2px;
  border-radius: 5px;
  font-family: GameOfThrones;
  font-size: 18px;
  line-height: 50px;
`;

export const QuoteButton = () => {
  const getRandomQuote = useStore((state) => state.getRandomQuote)

  return (
    <Button onClick={() => { getRandomQuote() }}>Get Random Quote</Button>
  )
}
