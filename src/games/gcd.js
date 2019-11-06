import { playGame, data } from '..';
import getNumber from '../generator';

const rules = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => {
  if (num2 === 0) return num1;
  return getCorrectAnswer(num2, num1 % num2);
};

const answerQuestion = () => {
  const num1 = getNumber(1, 100);
  const num2 = getNumber(1, 100);
  const question = (`${num1} ${num2}`);
  const correctAnswer = String(getCorrectAnswer(num1, num2));
  return data(correctAnswer, question);
};

export default () => playGame(rules, answerQuestion);
