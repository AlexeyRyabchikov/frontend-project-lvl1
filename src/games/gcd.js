import { playGame, data } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const getNumber1 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getNumber2 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getCorrectAnswer = (num1, num2) => {
  if (num2 === 0) return num1;
  return getCorrectAnswer(num2, num1 % num2);
};

const answerNumber = () => {
  const num1 = getNumber1(1, 100);
  const num2 = getNumber2(1, 100);
  const number = (`${num1} ${num2}`);
  const correctAnswer = String(getCorrectAnswer(num1, num2));
  return data(correctAnswer, number);
};

export default () => playGame(rules, answerNumber);
