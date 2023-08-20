import { styled } from "styled-components";
import { QuoteButton } from "./quotes-button";
import { CurrentRandomQuote } from "./current-random-quote";

const QuoteSection = styled.section``;

const QuotesSection = () => {
  return (
    <QuoteSection>
      <CurrentRandomQuote aria-label='current random quote' />
      <QuoteButton aria-label='press me to get a new random quote' />
    </QuoteSection>
  )
};

export default QuotesSection;