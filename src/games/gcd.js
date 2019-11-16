import { playGame, createDataPair } from '..';
import getDigit from '../generator';

const description = 'Find the greatest common divisor of given numbers.\n'

const getGcd = (first, end) => {
  if (end === 0) return first;
  return getGcd(end, first % end);
};

const getAnswerQuestion = () => {
  const maxNumberForGetNumber = 100;
  const first = getDigit(maxNumberForGetNumber);
  const end = getDigit(maxNumberForGetNumber);
  const question = (`${first} ${end}`);
  const correctAnswer = String(getGcd(first, end));
  return createDataPair(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
