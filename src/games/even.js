import { playGame, createDataPair } from '..';
import getNumber from '../generator';

const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (question) => question % 2 === 0;

const getAnswerQuestion = () => {
  const maxNumberForGetNumber = 100;
  const question = getNumber(maxNumberForGetNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return createDataPair(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
