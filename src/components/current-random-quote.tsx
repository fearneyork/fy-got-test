import useStore from "../utils/store";
import styled from "styled-components";

const RandomQuote = styled.p`
  font-size: 18px;
`;


export const CurrentRandomQuote = () => {
  const currentQuote = useStore(state => state.currentRandomQuote);
  return (
    <RandomQuote>{`${currentQuote?.sentence}`}</RandomQuote>
  )
}
