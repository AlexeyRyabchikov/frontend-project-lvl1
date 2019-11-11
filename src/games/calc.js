import { playGame, createDataPair } from '..';
import getNumber from '../generator';

const description = 'What is the result of the expression?';

const count = (operator, start, end) => {
  let result = 0;
  switch (operator) {
    case 1:
      result = `${start + end}`;
      break;
    case 2:
      result = `${start - end}`;
      break;
    case 3:
      result = `${start * end}`;
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

const getAnswerQuestion = () => {
  const operator = getNumber(1, 3);
  const start = getNumber(1, 100);
  const end = getNumber(1, 100);
  const question = (`${start} ${getOperator(operator)} ${end}`);
  const correctAnswer = count(operator, start, end);
  return createDataPair(correctAnswer, question);
};

export default () => playGame(description, getAnswerQuestion);
