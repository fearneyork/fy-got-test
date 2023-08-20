import useStore from "../utils/store";
import styled from "styled-components";

const RandomQuote = styled.p`
  font-size: 18px;
`;


export const CurrentRandomQuote = () => {
  const currentQuote = useStore(state => state.currentRandomQuote);
  if (currentQuote === null) {
    return (
      <RandomQuote>
        No Quote Yet!
      </RandomQuote>
    )
  }
  return (
    <RandomQuote>{`"${currentQuote?.sentence}" - ${currentQuote?.character.name}`}</RandomQuote>
  )
}
