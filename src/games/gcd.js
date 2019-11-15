import { playGame, createDataPair } from '..';
import getNumber from '../generator';

const description = 'Find the greatest common divisor of given numbers.\n'

const getGcd = (first, end) => {
  if (end === 0) return first;
  return getGcd(end, first % end);
};

const getAnswerQuestion = () => {
  const first = getNumber(100);
  const end = getNumber(100);
  const question = (`${first} ${end}`);
  const correctAnswer = String(getGcd(first, end));
  return createDataPair(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
