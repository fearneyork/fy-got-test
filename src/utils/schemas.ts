import { object, string, Schema } from 'yup';
import { TRandomQuote } from './types'

// const randomQuoteSchema: IRandomQuote = object({
//   sentence: string().required(),
//   character: object({
//     name: string().required(),
//     slug: string().required(),
//     house: object({
//       name: string().required(),
//       slug: string().required(),
//     }).required()
//   })
// });