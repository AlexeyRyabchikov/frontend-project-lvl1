import { cons } from '@hexlet/pairs';
import playGame from '..';
import generateRandom from '../generator';

const description = 'What is the result of the expression?';
const operators = ('+-*');
const maxDigitForGenerateRandom = 100;
const minDigitForGenerateRandom = 0;
const minDigitForOperator = 0;
const maxDigitForOperator = operators.length - 1;
const getAnswerQuestion = () => {
  const operator = operators[generateRandom(minDigitForOperator, maxDigitForOperator)];
  const first = generateRandom(minDigitForGenerateRandom, maxDigitForGenerateRandom);
  const last = generateRandom(minDigitForGenerateRandom, maxDigitForGenerateRandom);
  const question = `${first} ${operator} ${last}`;
  let correctAnswer;
  switch (operator) {
    case '+': {
      correctAnswer = first + last;
      break;
    }
    case '-': {
      correctAnswer = first - last;
      break;
    }
    case '*': {
      correctAnswer = first * last;
      break;
    }
    default:
  }
  return cons(correctAnswer.toString(), question);
};
export default () => playGame(description, getAnswerQuestion);
