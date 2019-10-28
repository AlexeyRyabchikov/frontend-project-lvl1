import { playGame, data } from '..';

const rules = 'What is the result of the expression?';

const getNumber1 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getNumber2 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getOperator = (text) => text.charAt(Math.random() * text.length);

const answerNumber = () => {
  const operator = getOperator('+-*');
  const num1 = getNumber1(1, 100);
  const num2 = getNumber2(1, 100);
  const getCorrectAnswer = () => {
    let result = 0;
    if (operator === '+') result = num1 + num2;
    if (operator === '-') result = num1 - num2;
    if (operator === '*') result = num1 * num2;
    return result;
  };
  const number = (`${num1} ${operator} ${num2}`);
  const correctAnswer = String(getCorrectAnswer());
  return data(correctAnswer, number);
};

export default () => playGame(rules, answerNumber);
