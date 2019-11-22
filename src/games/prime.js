import { cons } from '@hexlet/pairs';
import playGame from '..';
import getDigit from '../generator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNumberForGetDigit = 1000;
const minNumberForGetDigit = 0;

const isPrime = (question) => {
  const result = Boolean;
  if (question === 1) return false;
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) return false;
  }
  return result;
};

const getAnswerQuestion = () => {
  const question = getDigit(maxNumberForGetDigit, minNumberForGetDigit);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
