import { playGame, data } from '..';
import getNumber from '../generator';

const rules = 'What is the result of the expression?';

const getOperator = (text) => text.charAt(Math.random() * text.length);

const getCorrectAnswer = (operator, num1, num2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
  }
  return result;
};

const answerQuestion = () => {
  const operatorsList = '+-*';
  const operator = getOperator(operatorsList);
  const num1 = getNumber(1, 100);
  const num2 = getNumber(1, 100);
  const question = (`${num1} ${operator} ${num2}`);
  const correctAnswer = String(getCorrectAnswer(operator, num1, num2));
  return data(correctAnswer, question);
};

export default () => playGame(rules, answerQuestion);
