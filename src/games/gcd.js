import { playGame, createDataPair } from '..';
import getDigit from '../generator';

const description = 'Find the greatest common divisor of given numbers.'

const getGcd = (first, end) => {
  if (end === 0) return first;
  return getGcd(end, first % end);
};

const getAnswerQuestion = () => {
  const maxNumberForGetDigit = 100;
  const first = getDigit(maxNumberForGetDigit);
  const end = getDigit(maxNumberForGetDigit);
  const question = (`${first} ${end}`);
  const correctAnswer = String(getGcd(first, end));
  return createDataPair(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
