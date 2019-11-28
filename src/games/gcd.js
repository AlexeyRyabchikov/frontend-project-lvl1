import { cons } from '@hexlet/pairs';
import playGame from '..';
import generateRandom from '../generator';

const description = 'Find the greatest common divisor of given numbers.';
const maxDigitForGenerateRandom = 100;
const minDigitForGenerateRandom = 0;
const getGcd = (first, last) => {
  if (last === 0) return first;
  return getGcd(last, first % last);
};
const getAnswerQuestion = () => {
  const first = generateRandom(minDigitForGenerateRandom, maxDigitForGenerateRandom);
  const last = generateRandom(minDigitForGenerateRandom, maxDigitForGenerateRandom);
  const question = `${first} ${last}`;
  const correctAnswer = String(getGcd(first, last));
  return cons(correctAnswer, question);
};
export default () => playGame(description, getAnswerQuestion);
