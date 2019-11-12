import { playGame, createDataPair } from '..';
import getNumber from '../generator';

const describe = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  console.log(description);
};

const isEven = (question) => question % 2 === 0;

const getAnswerQuestion = () => {
  const question = getNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return createDataPair(correctAnswer, question);
};

export default () => playGame(describe, getAnswerQuestion);
