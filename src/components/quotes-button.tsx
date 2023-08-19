
import useStore from '../utils/store';


export const QuoteButton = () => {
  const getRandomQuote = useStore((state) => state.getRandomQuote)

  return (
    <button onClick={() => { getRandomQuote() }}>Get Random Quote</button>
  )
}
