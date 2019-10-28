import { playGame, data } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const getNumber1 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getNumber2 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const answerNumber = () => {
  let num1 = getNumber1(1, 100);
  let num2 = getNumber2(1, 100);
  const getCorrectAnswer = () => {
    while (num2 !== 0) num2 = num1 % (num1 = num2);
    return num1;
  };
  const number = (`${num1} ${num2}`);
  const correctAnswer = String(getCorrectAnswer());
  return data(correctAnswer, number);
};

export default () => playGame(rules, answerNumber);
