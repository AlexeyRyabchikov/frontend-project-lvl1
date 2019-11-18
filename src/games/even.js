import { playGame, createDataPair } from '..';
import getDigit from '../generator';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => question % 2 === 0;

const getAnswerQuestion = () => {
  const maxNumberForGetDigit = 100;
  const question = getDigit(maxNumberForGetDigit);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return createDataPair(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
