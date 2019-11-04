import { playGame, data } from '..';

const rules = 'What is the result of the expression?';

const getNumber1 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getNumber2 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getOperator = (text) => text.charAt(Math.random() * text.length);

const getCorrectAnswer = (operator, num1, num2) => {
  let result = 0;
  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (operator === '*') result = num1 * num2;
  return result;
};

const answerQuestion = () => {
  const operator = getOperator('+-*');
  const num1 = getNumber1(1, 100);
  const num2 = getNumber2(1, 100);
  const question = (`${num1} ${operator} ${num2}`);
  const correctAnswer = String(getCorrectAnswer(operator, num1, num2));
  return data(correctAnswer, question);
};

export default () => playGame(rules, answerQuestion);
