import { playGame, data } from '..';
import getNumber from '../generator';

const rules = 'What is the result of the expression?';

const getCorrectAnswer = (operator, num1, num2) => {
  let result = 0;
  switch (operator) {
    case 1:
      result = `${num1 + num2}`;
      break;
    case 2:
      result = `${num1 - num2}`;
      break;
    case 3:
      result = `${num1 * num2}`;
      break;
    default:
  }
  return result;
};

const getOperator = (operator) => {
  let result = 0;
  switch (operator) {
    case 1:
      result = `+`;
      break;
    case 2:
      result = `-`;
      break;
    case 3:
      result = `*`;
      break;
    default:
  }
  return result;
};

const answerQuestion = () => {
  const operator = getNumber(1, 3);
  const num1 = getNumber(1, 100);
  const num2 = getNumber(1, 100);
  const question = (`${num1} ${getOperator(operator)} ${num2}`);
  const correctAnswer = getCorrectAnswer(operator, num1, num2);
  return data(correctAnswer, question);
};

export default () => playGame(rules, answerQuestion);
