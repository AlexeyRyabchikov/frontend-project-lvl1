import { playGame } from '..';
import getDigit from '../generator';
import { cons } from '@hexlet/pairs';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNumberForGetDigit = 100;
const minNumberForGetDigit = 0;

const isEven = (question) => question % 2 === 0;

const getAnswerQuestion = () => {
  const question = getDigit(maxNumberForGetDigit, minNumberForGetDigit);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
