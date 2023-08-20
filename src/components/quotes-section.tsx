import { styled } from "styled-components";
import { QuoteButton } from "./quotes-button";
import { CurrentRandomQuote } from "./current-random-quote";

const QuoteSection = styled.section``;

const SubheaderText = styled.h2`
  font-family: GameOfThrones;
  color: rgb(230 230 230);
  align-self: center;
`;

const QuotesSection = () => {
  return (
    <QuoteSection>
      <SubheaderText>Quote section</SubheaderText>
      <QuoteButton />
      <CurrentRandomQuote />

    </QuoteSection>
  )
};

export default QuotesSection;