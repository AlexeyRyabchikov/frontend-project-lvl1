import { playGame, createDataPair } from '..';
import getNumber from '../generator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (question) => {
  let result = Boolean;
  if (question === 1) result = false;
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) result = false;
  }
  return result;
};

const getAnswerQuestion = () => {
  const question = getNumber(1, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return createDataPair(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
