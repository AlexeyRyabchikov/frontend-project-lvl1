import { playGame } from '..';
import getDigit from '../generator';
import { cons } from '@hexlet/pairs';

const description = 'Find the greatest common divisor of given numbers.'
const maxNumberForGetDigit = 100;
const minNumberForGetDigit = 0;

const getGcd = (first, last) => {
  if (last === 0) return first;
  return getGcd(last, first % last);
};

const getAnswerQuestion = () => {
  const first = getDigit(maxNumberForGetDigit, minNumberForGetDigit);
  const last = getDigit(maxNumberForGetDigit, minNumberForGetDigit);
  const question = (`${first} ${last}`);
  const correctAnswer = String(getGcd(first, last));
  return cons(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
