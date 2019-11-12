import { playGame, createDataPair } from '..';
import getNumber from '../generator';

const describe = () => {
  const description = 'Find the greatest common divisor of given numbers.\n'
  console.log(description);
};

const getGcd = (start, end) => {
  if (end === 0) return start;
  return getGcd(end, start % end);
};

const getAnswerQuestion = () => {
  const start = getNumber(1, 100);
  const end = getNumber(1, 100);
  const question = (`${start} ${end}`);
  const correctAnswer = String(getGcd(start, end));
  return createDataPair(correctAnswer, question);
};

export default () => playGame(describe, getAnswerQuestion);
