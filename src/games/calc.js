import { playGame } from '..';
import getDigit from '../generator';
import { cons } from '@hexlet/pairs';

const description = 'What is the result of the expression?';

const operatorList = ('+-*');
const maxNumberForGetDigit = 100;
const minNumberForGetDigit = 0;

const getAnswerQuestion = () => {
  const operator = operatorList[getDigit(operatorList.length - 1)];
  const first = getDigit(maxNumberForGetDigit, minNumberForGetDigit);
  const last = getDigit(maxNumberForGetDigit, minNumberForGetDigit);
  const question = (`${first} ${operator} ${last}`);
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
